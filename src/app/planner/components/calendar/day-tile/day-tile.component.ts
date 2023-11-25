import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CalendarDay } from "@planner/services/calendar.service";
import { EventDialogComponent } from "@planner/components/calendar/event-dialog/event-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-day-tile',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './day-tile.component.html',
  styleUrl: './day-tile.component.scss'
})
export class DayTileComponent {
  @HostBinding('class') get hostClass() {
    return ['day-tile', this.day?.positionClass];
  }
  @Input() day: CalendarDay;

  constructor(private dialog: MatDialog) {
  }

  @HostListener('click') onClick() {
    this.dialog.open(EventDialogComponent, { width: '800px' });
  }
}
