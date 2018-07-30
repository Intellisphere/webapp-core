import { LogOutModule } from './logout.module';

describe('LogOutModule', () => {
  let logoutModule: LogOutModule;

  beforeEach(() => {
    logoutModule = new LogOutModule();
  });

  it('should create an instance', () => {
    expect(logoutModule).toBeTruthy();
  });
});
