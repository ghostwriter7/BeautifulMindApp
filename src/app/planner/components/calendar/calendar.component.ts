import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { CalendarToolbarComponent } from "@planner/components/calendar/calendar-toolbar/calendar-toolbar.component";
import { CalendarService } from "@planner/services/calendar.service";
import { DayTileComponent } from "@planner/components/calendar/day-tile/day-tile.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatIconModule, CalendarToolbarComponent, DayTileComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  readonly grid = this.calendarService.grid;
  readonly daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private calendarService: CalendarService) {
  }
}
