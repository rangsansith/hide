import { HidePage } from './app.po';

describe('hide App', function() {
  let page: HidePage;

  beforeEach(() => {
    page = new HidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
