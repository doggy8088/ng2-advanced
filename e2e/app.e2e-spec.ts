import { Ng2AdvancedPage } from './app.po';

describe('ng2-advanced App', () => {
  let page: Ng2AdvancedPage;

  beforeEach(() => {
    page = new Ng2AdvancedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
