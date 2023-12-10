import { computed, Injectable, signal, Signal } from "@angular/core";
import { FormMode } from "@auth/enums";

@Injectable()
export class AuthUiService {
  private mode = signal(FormMode.SignUp);
  private isSignUp = computed(() => this.mode() === FormMode.SignUp);
  private label = computed(() => this.mode() === FormMode.SignUp ? 'Sign Up' : 'Sign In');

  public changeMode(): void {
    this.mode.update((formMode) => formMode === FormMode.SignUp ? FormMode.SignIn : FormMode.SignUp);
  }

  public getCurrentMode(): FormMode {
    return this.mode();
  }

  public getIsSignUpAsSignal(): Signal<boolean> {
    return this.isSignUp;
  }

  public getLabelAsSignal(): Signal<string> {
    return this.label;
  }
}
