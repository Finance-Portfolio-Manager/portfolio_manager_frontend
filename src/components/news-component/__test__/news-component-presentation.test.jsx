import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewsCard from './../news-component-presentation';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { shallow, ShallowWrapper, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = mount(<NewsCard></NewsCard>);

test("matches snapshot", ()=>{
    const tree = renderer.create(<NewsCard></NewsCard>).toJSON();
    expect(tree).toMatchSnapshot();
})

// test("1 card body renders", ()=>{
//     expect(wrapper.find("CardBody").length).toBe(1);
// })

// test("2 carousel controls render", ()=>{
//     expect(wrapper.find("CarouselControl").length).toBe(2);
// })

// describe("Performing actions on the news component", ()=>{
//     afterEach(cleanup);

//     test("click next", ()=>{
//         const nextControl = wrapper.find("CarouselControl").last();
//         const clickAction = ()=>{
//             nextControl.simulate('click');
//         }
//         expect(clickAction).not.toThrow();
//     })
    
//     test("click previous", ()=>{
//         const prevControl = wrapper.find("CarouselControl").first();
//         // console.log(prevControl.debug());
//         const clickAction = ()=>{
//             prevControl.simulate('click');
//         }
//         expect(clickAction).not.toThrow();
//     })

//     test("click carousel indicators", ()=>{
//         const carIndicator = wrapper.find("CarouselIndicators");
//         const clickAction = ()=>{
//             carIndicator.simulate('click');
//         }
//         expect(clickAction).not.toThrow();
//     })
// })