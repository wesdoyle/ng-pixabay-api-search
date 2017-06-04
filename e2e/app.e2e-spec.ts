import { ImageSearchPage } from './app.po';

describe('image-search App', () => {
  let page: ImageSearchPage;

  beforeEach(() => {
    page = new ImageSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
