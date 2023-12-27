import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have a title angular jest setup', () => {
    expect(fixture.title).toEqual('client');
  });
  it('adds 1 + 2 equal 3', () => {
    expect(fixture.sum(1, 2)).toEqual(3);
  });
});
