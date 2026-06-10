const request = require('supertest');
const app = require('./app');

test('It should return Hello World on the main page', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World');
    expect(response.statusCode).toBe(200);
});