import { Sandbox1Page } from './app.po';

describe('sandbox1 App', () => {
  let page: Sandbox1Page;

  beforeEach(() => {
    page = new Sandbox1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
