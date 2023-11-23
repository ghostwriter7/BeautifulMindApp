import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  days: { date: Date, positionClass: string } [];

  ngOnInit(): void {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const lastDateIndex = lastDateOfMonth.getDate();

    this.days = new Array(lastDateIndex).fill(0).map((_, index) => {
      const date = new Date(currentYear, currentMonth, index + 1);
      const dayIndex = date.getDay() + 1;
      return { date, positionClass: `day-${dayIndex}` }
    });
  }
}
