import { LogInModule } from './login.module';

describe('LogInModule', () => {
  let logInModule: LogInModule;

  beforeEach(() => {
    logInModule = new LogInModule();
  });

  it('should create an instance', () => {
    expect(logInModule).toBeTruthy();
  });
});
