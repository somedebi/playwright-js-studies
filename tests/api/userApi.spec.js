import { test, expect } from '@playwright/test';

test('Create a new user via API', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
        title: 'First POST',
        body: 'Learning Playwright API',
        userId: 1
    }
});

   expect(response.status()).toBe(201);

const responseBody = await response.json();

expect(responseBody.title).toBe('First POST');
expect(responseBody.body).toBe('Learning Playwright API');
expect(responseBody.userId).toBe(1);

});