import { AppPage } from './app.po';
import { browser, by, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', async () => {
  //   await page.navigateTo();
  //   expect(await page.getTitleText()).toEqual('CustomerProduct app is running!');
  // });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });

  it('should display welcome message', async () => {

    await page.navigateToHome();
    await browser.sleep(3000);
    expect(await page.getTitleText()).toEqual('Welcome To Customer Product App');

  });
  it('should display add customer page ', async () => {
    
    await page.navigateToHome();
    await browser.driver.findElement(by.id('dropdownMenuButton1')).click();
    await browser.sleep(3000);
    await browser.driver.findElement(by.id('addcustomer')).click();
    await browser.sleep(5000);
    expect(await page.getCustomerPageTitle()).toEqual('Add Customer');

  });
  // it('should display list of customer page ', async () => {
    
  //   await page.navigateToHome();
  //   await browser.driver.findElement(by.id('dropdownMenuButton1')).click();
  //  // await browser.sleep(2000);
  //   await browser.driver.findElement(by.id('customerlist')).click();
  //  // await browser.sleep(2000);
  //   var currentUrl= browser.getCurrentUrl();
  //   var expectedUrl= "http://localhost:4200/customer/get-customer";
  //   expect(await currentUrl).toEqual(expectedUrl);
  // });
});
