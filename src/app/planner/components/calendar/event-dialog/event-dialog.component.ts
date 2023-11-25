import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { EventFormComponent } from "@planner/components/calendar/event-form/event-form.component";

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatFormFieldModule, MatInputModule, MatDialogActions, MatButtonModule, EventFormComponent],
  templateUrl: './event-dialog.component.html',
  styleUrl: './event-dialog.component.scss'
})
export class EventDialogComponent {

  constructor(private dialogRef: MatDialogRef<EventDialogComponent>) {
  }

  cancel():void {
    this.dialogRef.close();
  }
}
