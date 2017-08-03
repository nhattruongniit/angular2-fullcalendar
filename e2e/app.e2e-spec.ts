import { Angular2FullcalendarPage } from './app.po';

describe('angular2-fullcalendar App', () => {
  let page: Angular2FullcalendarPage;

  beforeEach(() => {
    page = new Angular2FullcalendarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
