import { browser, by, element } from 'protractor';

export class AppPage {
  // async navigateTo(): Promise<unknown> {
  //   return browser.get(browser.baseUrl);
  // }

  // async getTitleText(): Promise<string> {
  //   return element(by.css('app-root .content span')).getText();
  // }

  async navigateToHome() :Promise<unknown>
  {
    return  browser.driver.get('http://localhost:4200/Home');
  }

  async getTitleText(): Promise<string> {

    return element(by.className('heading')).getText();
  }
  async getCustomerPageTitle() : Promise<string>{
    return element(by.id('title')).getText();
  }
}
