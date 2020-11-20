import * as request from 'request-promise-native'
// let request = require('request-promise-native');

describe("Test sute", () => {
    it('First api test', async() => {
        console.log('test pass');
        let resp = await request.get('https://www.google.com/');
        console.log(resp);

    });
})