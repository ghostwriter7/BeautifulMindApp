import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from "@planner/components/calendar/calendar.component";

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [CommonModule, CalendarComponent],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlannerComponent {

}
