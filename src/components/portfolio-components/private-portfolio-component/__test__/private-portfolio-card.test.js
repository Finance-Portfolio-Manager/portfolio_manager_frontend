import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PrivatePortfolioCard from '../private-portfolio-card';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const portfolio = { name: "Trent", value: 100, id: 5, stocks: [{ symbol: "TSLA", quantity: 5, currentPrice: 100 }]};
const wrapper = shallow(<PrivatePortfolioCard portfolio={ portfolio }></PrivatePortfolioCard>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<PrivatePortfolioCard portfolio={ portfolio }></PrivatePortfolioCard>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("Details button renders", ()=>{
    expect(wrapper.find("Button").text()).toContain("Details");
})

// test("image renders", ()=>{
//     expect(wrapper.find("CardImg").length).toBe(1);
// })

test("card body renders", ()=>{
    expect(wrapper.find("CardBody").length).toBe(1);
})

describe("functionaity", ()=>{
    test("Click details button", ()=>{
        const detailsButton = wrapper.find("Button");
        const clickAction = ()=>{
            detailsButton.simulate('click');
        }
        expect(clickAction).not.toThrow();
    })
})