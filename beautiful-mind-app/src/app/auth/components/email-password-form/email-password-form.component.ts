import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "@auth/services";
import { UserService } from "@auth/services/user.service";
import { Router } from "@angular/router";

type SignUpForm = FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
}>

enum FormMode {
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP'
}

@Component({
  selector: 'app-email-password-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './email-password-form.component.html',
  styleUrl: './email-password-form.component.scss'
})
export class EmailPasswordFormComponent {
  form: SignUpForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  });
  infoMessage = computed(() =>
    this.mode() === FormMode.SignUp ? 'Do you already have an account?' : `Don't you have an account?`
  );
  mode = signal<FormMode>(FormMode.SignUp)
  submitButtonLabel = computed(() =>
    this.mode() === FormMode.SignUp ? 'Sign Up' : 'Sign In');
  toggleModeButtonLabel = computed(() =>
    this.mode() === FormMode.SignUp ? 'Sign in with email' : 'Sign up with email'
  );

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) {
  }

  changeMode(): void {
    this.mode.update((mode) => mode === FormMode.SignUp ? FormMode.SignIn : FormMode.SignUp);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    const request$ = this.mode() === FormMode.SignUp ?
      this.authService.signUp(email, password) :
      this.authService.signIn(email, password);

    request$.subscribe(({ accessToken }) => {
      this.userService.accessToken = accessToken;
      this.router.navigate(['home']);
    });
  }
}
