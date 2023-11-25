import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CalendarService } from "@planner/services/calendar.service";

@Component({
  selector: 'app-calendar-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSelectModule, MatIconModule, MatButtonModule],
  templateUrl: './calendar-toolbar.component.html',
  styleUrl: './calendar-toolbar.component.scss'
})
export class CalendarToolbarComponent {
  readonly label = this.calendarService.label;
  readonly months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    .map((label, index) => ({ label, value: index }));
  readonly years: number[] = new Array(10).fill(0).map((_, index) => 2023 + index);

  constructor(public calendarService: CalendarService) {
  }
}
