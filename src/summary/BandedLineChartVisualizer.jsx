import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import moment from 'moment';
import {scaleLinear} from "d3-scale";
import Collection from 'lodash';
import Lang from 'lodash';
import Function from 'lodash';
import PropTypes from 'prop-types';

import './BandedLineChartVisualizer.css';

/*
 A BandedLineGraphVisualizer that graphs a set of data over time
 */
class BandedLineChartVisualizer extends Component {
    constructor(props) { 
        super(props);

        this.resize = Function.throttle(this.updateDimensions, 100);
        this.updateState = true;
        // This var will be used 
        this.state = {
            chartWidth: 600,
            chartHeight: 400,
        }
    }

    // Makesure to update data and resize the component when its contents update.
    componentDidUpdate = () => {
        if (this.updateState) {
            this.updateState = false;
        } else {
            this.updateState = true;
            // this.resize();
        }
    }

    // Adds appropriate event listeners for tracking resizing
    componentDidMount = () => { 
        // window.addEventListener("resize", this.resize);
        // this.chartParentDiv.addEventListener("resize", this.resize);
        setTimeout(this.resize, 100);
    }

    // Removes event listeners that track resizing
    componentWillUnmounnt = () => {  
        // window.removeEventListener("resize", this.resize)
    }

    // Turns dates into numeric representations for graphing
    processForGraphing = (data, xVar, xVarNumber) => { 
        const dataCopy = Lang.clone(data);

        Collection.map(dataCopy, (d) => { 
            d[xVarNumber]  = Number(new Date(d[xVar]))
        });
        return dataCopy;
    }

    // Function for formatting dates -- uses moment for quick formatting options
    dateFormat = (timeInMilliseconds) => {
        return moment(timeInMilliseconds).format('MM-DD-YY');
    }

    // Gets the min/max values of the numeric representation of xVar
    // Assumes processed data array 
    getMinMax = (processedData, xVarNumber) => { 
        // Iterate once to avoid 2x iteration by calling min and max separately
        return Collection.reduce(processedData, (rangeValues, dataObj) => {
            const t = dataObj[xVarNumber];
            
            if (t < rangeValues[0]) { 
                rangeValues[0] = t;
            } else if (t > rangeValues[1]) { 
                rangeValues[1] = t;
            }
            return rangeValues;
        }, [processedData[0][xVarNumber], processedData[0][xVarNumber]]);

    }

    // Use min/max info to build ticks for the 
    // Assumes processed data
    getTicks = (processedData, xVarNumber) => { 
        if (!processedData || !processedData.length ) {return [];}

        const domain = this.getMinMax(processedData, xVarNumber);
        const scale = scaleLinear().domain(domain).range([0, 1]);;
        const ticks = scale.ticks(4);
        return ticks.map(entry => +entry).sort();
    } 

    // Formats a xVar (numeric time) value for tooltips
    xVarFormatFunction = (xVarNumber)  => { 
        return "Date: " + moment(xVarNumber).format("MMM D");
    }   

    // Based on a unit, return a function that formats a yVar (quantatative) value for tooltips 
    createYVarFormatFunctionWithUnit = (unit) => { 
        return (value) => { 
            return `${value} ${unit}`;
        }
    }

    // Updates the dimensions of the chart
    updateDimensions = () => { 
        const chartParentDivWidth = this.chartParentDiv.offsetWidth;

        this.setState({ 
            chartWidth: chartParentDivWidth,
        })
    }

    renderSubSectionChart = (subSection, patient, condition) => { 
        // FIXME: Should start_time be a magic string?
        const xVar = "start_time";
        const xVarNumber = `${xVar}Number`;
        const yVar = subSection.name;
        const data = subSection.itemsFunction(patient, condition);  
        // process dates into numbers for graphing
        const processedData = this.processForGraphing(data, xVar, xVarNumber);
        const yUnit = processedData[0].unit;
        return (
            <div 
                ref={(chartParentDiv) => {this.chartParentDiv = chartParentDiv;}}
                key={subSection}
            >
                <LineChart
                    width={this.state.chartWidth}
                    height={this.state.chartHeight}
                    data={processedData}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis 
                        dataKey={xVarNumber} 
                        type="number"
                        domain={[]}
                        ticks={this.getTicks(processedData, xVarNumber)} 
                        tickFormatter={this.dateFormat}
                    />
                    <YAxis 
                        dataKey={yVar}
                    />
                    <Tooltip 
                        labelFormatter={this.xVarFormatFunction}
                        formatter={this.createYVarFormatFunctionWithUnit(yUnit)}
                    />
                    <Line type="monotone" dataKey={yVar} stroke="#295677" yAxisId={0} />
                </LineChart>
           </div>
        );
    }

    // Gets called for each section in SummaryMetaData.jsx
    render() {
        const {patient, condition, conditionSection} = this.props;

        return (
            <div className="line-chart-subsection">
                {
                    conditionSection.data.map((subSection, i) => { 
                        return this.renderSubSectionChart(subSection, patient, condition);
                    })
                }
            </div>
        );

    }
}

BandedLineChartVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    // onItemClicked: PropTypes.func,
    // allowItemClick: PropTypes.bool
};

export default BandedLineChartVisualizer;
