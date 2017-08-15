import { RhPositivePage } from './app.po';

describe('rh-positive App', () => {
  let page: RhPositivePage;

  beforeEach(() => {
    page = new RhPositivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
