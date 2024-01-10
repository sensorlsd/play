import {test, expect} from '@playwright/test';


test.beforeEach(async({page}) => {

    await page.goto('http://localhost:4200/');
    await page.getByTitle('Forms').click();
    await page.locator("a[title$='Layouts']").click()

})

test.describe('Form Layout Tests', () => {
    test('fill using the grid form', async ({page}) => {

        await page.getByRole('textbox', {name: "Email"}).first().fill('test@test.com');
        await page.getByRole("textbox", {name: "Password"}).first().fill("12345")
        await page.getByRole("button", {name: "Sigh in"})
        await page.getByLabel('Email').first().click();

    })

    test.only('child elements ', async ({page}) => {
        await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()
        await page.locator('nb-card').getByRole('button', {name: 'Submit'}).first().click();
    })

    // test('fill using the grid form', async ({page}) => {
    //
    //     await page.locator('input')
    //     // by id
    //     await page.locator('#inputEmail1').blur(); //id
    //     // by class value
    //     await page.locator('.status-basic'); //class
    //     //by attribute
    //     await page.locator('[placeholder="Email"]')
    //     // by all class values
    //     await page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');
    //
    //     //combine diff selectors
    //     await page.locator('input[placeholder="Email"][id="inputEmail1"]').boundingBox();
    //
    //     // by xpath
    //     await page.locator('//*[@id="inputEmail1"]');
    //
    //     //by text match
    //     await page.locator(':text("Using")');
    //
    //     //by text match
    //     await page.locator(':text-is("Using the Grid")')
    //
    //     page.locator('//nb-card-header[text()="Using the Grid"]')
    //
    // })
})
    // test('open localhost:4200 navigation to form layouts', async ({page}) => {
    //
    //
    //
    // });
    //
    // test('open localhost:4200 navigation to datepicker page', async ({page}) => {
    //
    //     await page.locator("a[title='Datepicker']").click()
    //
    // });

//
// test.describe('test suite 2', () => {
//     test.beforeEach(async ({page}) => {
//
//         await page.locator("a[title='Charts']").click()
//
//     })
//     test('open localhost:4200 navigation to Echarts', async ({page}) => {
//
//         await page.locator("a[title$='Echarts']").click()
//
//     });
// })