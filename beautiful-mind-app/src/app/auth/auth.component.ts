import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPasswordFormComponent } from "@auth/components/email-password-form/email-password-form.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, EmailPasswordFormComponent, MatCardModule, MatIconModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
