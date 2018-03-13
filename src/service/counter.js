import request from '../util/request';

export default {
    getDefaultCountNumber() {
        return request({
            url: 'http://mock.xinheyun.com/mock/45/counter',
        });
    }
}