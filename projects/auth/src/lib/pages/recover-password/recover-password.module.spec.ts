import { RecoverPasswordModule } from './recover-password.module';

describe('RecoverPasswordModule', () => {
  let recoverPasswordModule: RecoverPasswordModule;

  beforeEach(() => {
    recoverPasswordModule = new RecoverPasswordModule();
  });

  it('should create an instance', () => {
    expect(recoverPasswordModule).toBeTruthy();
  });
});
