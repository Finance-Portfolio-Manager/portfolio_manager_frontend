import { NewsPage } from "./layout/NewsPage";
import { NewsPaperV2 } from "./layout/NewsPaperV2";
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

describe("Testing News Component", ()=>{
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
            // {"title": "Facebook Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            // {"title": "Netflix Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            // {"title": "Instagram Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            // {"title": "Amazon Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            // {"title": "Snapchat Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"}
        ];
        const wrapperWithNews = shallow(<NewsPaperV2 key={mockData[index]?.url} story={mockData[index]} incrementIndex={incrementIndex} decrementIndex={decrementIndex}/>);
        expect(wrapperWithNews.exists()).toBe(false);
    })
});