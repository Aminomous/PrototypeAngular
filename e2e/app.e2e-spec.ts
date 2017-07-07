import { PrototypeNGPage } from './app.po';

describe('prototype-ng App', () => {
  let page: PrototypeNGPage;

  beforeEach(() => {
    page = new PrototypeNGPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
