const request = require('supertest');
const app = require('../index'); // Import the Express app

describe('Items API', () => {
  test('GET /items should return an array', async () => {
    const response = await request(app).get('/items');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  test('POST /items should create an item', async () => {
    const newItem = { name: 'Tablet', description: 'A new tablet device' };
    const response = await request(app).post('/items').send(newItem);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newItem.name);
  });
});