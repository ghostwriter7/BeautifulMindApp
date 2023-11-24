import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  days: { dayOfMonth: number, date: Date, positionClass: string } [];
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const lastDateIndex = lastDateOfMonth.getDate();

    this.monthFormControl.setValue(currentMonth);
    this.yearFormControl.setValue(currentYear);

    this.days = new Array(lastDateIndex).fill(0).map((_, index) => {
      const date = new Date(currentYear, currentMonth, index + 1);
      const dayIndex = date.getDay() + 1;
      return { dayOfMonth: date.getDate(), date, positionClass: `calendar__day-${dayIndex}` }
    });
    this.label = `${now.toLocaleString('default', { month: 'long', year: 'numeric' })}`
  }
}
