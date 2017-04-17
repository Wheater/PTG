import { PtgWebsitePage } from './app.po';

describe('ptg-website App', () => {
  let page: PtgWebsitePage;

  beforeEach(() => {
    page = new PtgWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
