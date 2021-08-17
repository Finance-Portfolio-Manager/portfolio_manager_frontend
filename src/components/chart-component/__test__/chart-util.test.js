import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { convertSeriesData, initialSeriesData } from './../chart-util';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("test initialSeriesData function for 100 periods", ()=>{
    const seriesData = initialSeriesData(new Date("1990-01-01"), 100);
    expect(seriesData.length).toBe(100);
})

test("test convertSeriesData function for 50 periods", ()=>{
    const seriesData = initialSeriesData(new Date("1990-01-01"), 50);
    const convertedData = convertSeriesData(seriesData);

    // console.log(seriesData);
    // console.log(convertedData);
    // console.log(convertedData[0]);
    
    expect(convertedData.length).toBe(50);
    expect(convertedData[0]).toBeTruthy();
})

// Test and find out why values for y are all NaN