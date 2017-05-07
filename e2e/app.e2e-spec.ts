import { ItmaratonPage } from './app.po';

describe('itmaraton App', () => {
  let page: ItmaratonPage;

  beforeEach(() => {
    page = new ItmaratonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
