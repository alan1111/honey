import { AaPage } from './app.po';

describe('aa App', function() {
  let page: AaPage;

  beforeEach(() => {
    page = new AaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
