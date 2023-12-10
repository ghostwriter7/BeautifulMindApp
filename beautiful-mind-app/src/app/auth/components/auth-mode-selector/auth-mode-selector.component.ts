import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { AuthUiService } from "@auth/services";

@Component({
  selector: 'app-auth-mode-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './auth-mode-selector.component.html',
  styleUrl: './auth-mode-selector.component.scss',
})
export class AuthModeSelectorComponent {
  infoMessage = computed(() =>
    this.isSignUp() ? 'Do you already have an account?' : `Don't you have an account?`
  );
  isSignUp = this.authUiService.getIsSignUpAsSignal();
  toggleModeButtonLabel = computed(() =>
    this.isSignUp() ? 'Sign in with email' : 'Sign up with email'
  );

  constructor(private authUiService: AuthUiService) {
  }

  changeMode(): void {
    this.authUiService.changeMode();
  }
}
