import { NewsPage } from "./layout/NewsPage";
import React from "react";
import { NewsPaperV2 } from "./layout/NewsPaperV2";
import { mount, shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { GrNext } from "react-icons/gr";
import userEvent from "@testing-library/user-event";
// import { useEffect } from "react";

configure({adapter: new Adapter() });

describe("Testing News Component", ()=>{

    // let wrapperWithNewss;

    // beforeEach(() => {
    //     useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

    //     const mockData = [
    //         {"title": "Facebook Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
    //         {"title": "Netflix Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
    //         {"title": "Instagram Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
    //         {"title": "Amazon Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
    //         {"title": "Snapchat Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"}
    //     ];

    //     const wrapperWithNewss = mount(<NewsPage />);
    // });

    // afterEach(() => {
    // document.body.removeChild(container);
    // container = null;
    // });

    test("News component renders", () =>{
        const wrapper = shallow(<NewsPage />);
        expect(wrapper.exists()).toBe(true);
    });

    test("News component uses given info", () =>{

        const index = 0;

        const incrementIndex = () =>{
            setIndex((index + 1) % mockData.length);
          }
        const decrementIndex = () =>{
        setIndex((index - 1 + mockData?.length) % mockData?.length);
        }

        const mockData = [
            {"title": "Facebook Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            {"title": "Netflix Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            {"title": "Instagram Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            {"title": "Amazon Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            {"title": "Snapchat Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"}
        ];
        const wrapperWithNews = shallow(<NewsPaperV2 key={mockData[index]?.url} story={mockData[index]} incrementIndex={incrementIndex} decrementIndex={decrementIndex}/>);
        expect(wrapperWithNews.exists()).toBe(true);
    })

    // test("Matching snapshot..", () => {
    //     // console.log(container.inn);
    //     // act(() => {
    //     //     ReactDOM.render(<NewsPage />, container);
    //     // });
    //     // // const tree = container.toJSON();
    //     // // console.log(container);
    //     expect(wrapperWithNewss).toMatchSnapshot();
    // })

    test("Not rendering News...", () =>{
        const wrapperWithNews = mount(<NewsPage />);
        const div = wrapperWithNews.find("div.news__empty-header");
        expect(div.text()).toContain("No news yet... Try again later");
    })

    // it("Testing slides", () => {
    //     // const changeIndex = jest.fn();
    //     // const wrapperWithNews = shallow(<NewsPage />);
    //     // const node = wrapperWithNews.getNode('NewsPaperV2');
    //     // console.log(node.type);
    //     // const handleClick = jest.spyOn(React, "useState");
    //     // handleClick.mockImplementation(index => [index, changeIndex]);

    //     // wrapperWithNews.find('.news__button').simulate("click");
    //     // expect(changeIndex).toBeTruthy();
    //     act(() => {
    //         ReactDOM.render(<NewsPage />, container);
    //       });
    //     const btn = container.querySelector("button.news_button");

    //     const index = 0;

    //     const incrementIndex = () =>{
    //         setIndex((index + 1) % mockData.length);
    //       }
    //     const decrementIndex = () =>{
    //         setIndex((index - 1 + mockData?.length) % mockData?.length);
    //     }

    //     const mockData = [
    //         {"title": "Facebook Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
    //         {"title": "Netflix Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
    //         {"title": "Instagram Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
    //         {"title": "Amazon Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
    //         {"title": "Snapchat Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"}
    //     ];
    //     // const wrapperWithNews = mount(<NewsPage />);
    //     // wrapperWithNews.invoke('handler')();
    //     // const button = wrapperWithNews.find("button.news__button");
    //     const clickF = () =>{
    //         btn.simulate("click");
    //     }

    //     expect(clickF).not.toThrow();
    // })
});