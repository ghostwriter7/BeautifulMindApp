import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent {
  form = new FormGroup({
    title: new FormControl<string>(null, Validators.required),
    description: new FormControl<string>(null),
    startDateTime: new FormControl<string>(null, Validators.required),
    endDateTime: new FormControl<string>(null, Validators.required),
    location: new FormControl<string>(null, Validators.required)
  });
}
