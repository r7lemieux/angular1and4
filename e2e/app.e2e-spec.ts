import { A12Page } from './app.po';

describe('a12 App', () => {
  let page: A12Page;

  beforeEach(() => {
    page = new A12Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
