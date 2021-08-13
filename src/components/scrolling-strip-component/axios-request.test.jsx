import getSymbolPnlFromApi from './axios-request';
import axios from 'axios';

jest.mock('axios');

const tickers = ["MSFT","GOOG"];

test('should fetch data',()=>{
    const testArrayJson = [{"MSFT":29,"GOOG":40}];
    const resp = {data: testArrayJson};
    axios.post.mockResolvedValue(resp);

    return getSymbolPnlFromApi(tickers).then(data => expect(data).toEqual(resp));
});