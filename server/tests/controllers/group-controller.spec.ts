///<reference path="../../node_modules/@types/jasmine/index.d.ts" />
///<reference path="../../node_modules/@types/request/index.d.ts" />

import * as request from 'request';
require('../../src/common/tsarray');

let base_url = 'http://localhost:3000/api/groups'

describe('group-controller tests', () => {
    describe('GET /', () => {

        it('returns status code 200', () => { 
            request.get(base_url + '/', (error, response, body) => {
                expect(response.statusCode).toBe(200);
            })
        });

    });
});