import test, {expect} from "@playwright/test";


test('add pet', async({page}) => {
    const response = await page.route('https://petstore.swagger.io/v2/store/order/2', async route => {
        const tags = {
            "code": 222,
            "type": "UA"
        }
        await route.fulfill({body: JSON.stringify(tags)})
    })
})

test.only('add pet1', async({page, request}) => {
    const response = await request.get('https://petstore.swagger.io/v2/store/order/1')
    console.log(response)
    expect(response.status()).toEqual(300)
})