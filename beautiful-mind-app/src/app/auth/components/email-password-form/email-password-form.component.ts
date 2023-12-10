import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService, AuthUiService } from "@auth/services";
import { UserService } from "@auth/services/user.service";
import { Router } from "@angular/router";
import { FormMode } from "@auth/enums";

type SignUpForm = FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
}>

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
  submitButtonLabel = this.authUiService.getLabelAsSignal();


  constructor(private authService: AuthService,
              private authUiService: AuthUiService,
              private router: Router,
              private userService: UserService) {
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    const request$ = this.authUiService.getCurrentMode() === FormMode.SignUp ?
      this.authService.signUp(email, password) :
      this.authService.signIn(email, password);

    request$.subscribe(({ accessToken }) => {
      this.userService.accessToken = accessToken;
      this.router.navigate(['home']);
    });
  }
}
