const loginPage = require('../page/login.page.js')



describe("Should check the login forms on dou.ua and chek form with salary quartiles" , async () => {
    
    it('Go to website ratatype.ua', async () => {
        await browser.url('https://www.ratatype.ua');
        await browser.maximizeWindow();
        await browser.pause(100)
        })

    it('Should check the login forms', 
        async () => {
        await loginPage.loginExists();
        await browser.pause(100)

        await loginPage.loginIsClickable();
        await browser.pause(100)
        
        await loginPage.loginClick();
        await browser.pause(100)

        await loginPage.signUpExists();
        await browser.pause(100);

        await loginPage.signUpClickable()
        await browser.pause(100)

        await loginPage.signUpClick()
        await browser.pause(100)

        await loginPage.nameExists();
        await browser.pause(100);

        await loginPage.nameClickable()
        await browser.pause(100)

        await loginPage.setName()
        await browser.pause(100)

        await loginPage.emailExists();
        await browser.pause(100);

        await loginPage.emailClickable()
        await browser.pause(100)

        await loginPage.setEmail()
        await browser.pause(100)

        await loginPage.passExists();
        await browser.pause(100);

        await loginPage.passClickable()
        await browser.pause(100)

        await loginPage.setPass()
        await browser.pause(100)

        await loginPage.primaryExists();
        await browser.pause(100);

        await loginPage.primaryClickable()
        await browser.pause(100)

        await loginPage.primaryClick()
        await browser.pause(100)

        await loginPage.closeBtn()
        await browser.pause(100)
        })



    }
)