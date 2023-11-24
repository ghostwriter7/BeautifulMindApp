import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-calendar-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSelectModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './calendar-toolbar.component.html',
  styleUrl: './calendar-toolbar.component.scss'
})
export class CalendarToolbarComponent implements OnInit {
  label: string;
  monthFormControl = new FormControl<number>(null);
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((label, index) => ({
    label,
    value: index
  }));
  yearFormControl = new FormControl<number>(null);
  years: number[] = new Array(10).fill(0).map((_, index) => 2023 + index);

  ngOnInit(): void {
    const now = new Date();
    this.label = `${now.toLocaleString('default', { month: 'long', year: 'numeric' })}`;
    this.monthFormControl.setValue(now.getMonth());
    this.yearFormControl.setValue(now.getFullYear());
  }
}
