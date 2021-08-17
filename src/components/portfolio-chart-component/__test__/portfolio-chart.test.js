import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PortfolioChart from './../portfolio-chart';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// const timeFrame = 7;
// let dayCount = 0;
var chartTime = ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7"];

const options = {
    chart: {
        height: 350,
        type: 'line',
        zoom: {
        enabled: false
        },
    },
    
    stroke: {
        width: [5, 7],
        curve: 'straight',
        dashArray: [0, 8]
    },

    title: {
        text: 'Portfolio Statistics',
        align: 'center'
    },

    legend: {
        tooltipHoverFormatter: function(val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
    },

    markers: {
        size: 0,
        hover: {
        sizeOffset: 6
        }
    },

    xaxis: {
        type: 'category',
        categories: chartTime,
    },

    tooltip: {
        y: [
        {
            title: {
            formatter: function (val) {
                return val;
            }
            }
        },
        {
            title: {
            formatter: function (val) {
                return val;
            }
            }
        },
        
        ]
    },

    grid: {
        borderColor: '#f1f1f1',
    }
}

const series = [{
    name: "Portfolio Value",
    data: [4263.25, 4567.25, 4583.25, 4363.25, 3863.15, 4343.77, 4168.25]
},
{
    name: "Amount Invested",
    data: [3963.25, 4162.77, 4081.77, 4363.25, 4663.25, 4863.25, 4063.25]
}]

const wrapper = shallow(<PortfolioChart options={ options } series = { series } type="line" height={350} width={800}></PortfolioChart>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<PortfolioChart options={ options } series = { series } type="line" height={350} width={800}></PortfolioChart>).toJSON();
    expect(tree).toMatchSnapshot();
})