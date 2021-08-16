import News from "./news-component-presentation";
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

describe("Testing News Component", ()=>{
    test("News component renders", () =>{
        const wrapper = shallow(<News></News>);
        expect(wrapper.exists()).toBe(true);
    });
});