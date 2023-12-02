import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

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
  infoMessage = computed(() =>
    this.mode() === 'SIGN_UP' ? `Don't you have an account?` : 'Do you already have an account?'
  );
  mode = signal<'SIGN_UP' | 'SIGN_IN'>('SIGN_UP')
  submitButtonLabel = computed(() =>
    this.mode() === 'SIGN_UP' ? 'Sign Up' : 'Sign In');
  toggleModeButtonLabel = computed(() =>
    this.mode() === 'SIGN_UP' ? 'Sign up with email' : 'Sign in with email'
  );

  changeMode(): void {
    this.mode.update((mode) => mode === 'SIGN_UP' ? 'SIGN_IN' : 'SIGN_UP');
  }

  onSubmit() {

  }
}
