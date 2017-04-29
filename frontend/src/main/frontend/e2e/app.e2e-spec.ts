import { OntarioSpringPage } from './app.po';

describe('ontario-spring App', () => {
  let page: OntarioSpringPage;

  beforeEach(() => {
    page = new OntarioSpringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
