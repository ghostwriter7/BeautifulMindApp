import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPasswordFormComponent } from "@auth/components/email-password-form/email-password-form.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { AuthModeSelectorComponent } from "@auth/components/auth-mode-selector/auth-mode-selector.component";
import { AuthUiService } from "@auth/services";

@Component({
  selector: 'app-auth',
  standalone: true,
  providers: [AuthUiService],
  imports: [CommonModule, EmailPasswordFormComponent, MatCardModule, MatIconModule, AuthModeSelectorComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  label = this.authUiService.getLabelAsSignal();

  constructor(private authUiService: AuthUiService) {
  }
}
