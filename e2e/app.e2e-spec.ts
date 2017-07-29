import { AboardPage } from './app.po';

describe('aboard App', () => {
  let page: AboardPage;

  beforeEach(() => {
    page = new AboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
