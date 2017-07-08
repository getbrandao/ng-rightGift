import { NgRightGiftPage } from './app.po';

describe('ng-right-gift App', () => {
  let page: NgRightGiftPage;

  beforeEach(() => {
    page = new NgRightGiftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
