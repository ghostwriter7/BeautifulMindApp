import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { CalendarService } from "@planner/services/calendar.service";
import { map, merge } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-calendar-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSelectModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './calendar-toolbar.component.html',
  styleUrl: './calendar-toolbar.component.scss'
})
export class CalendarToolbarComponent implements OnInit {
  label = this.calendarService.getCalendarLabel();
  monthFormControl: FormControl<number>;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    .map((label, index) => ({ label, value: index }));
  yearFormControl: FormControl<number>;
  years: number[] = new Array(10).fill(0).map((_, index) => 2023 + index);

  constructor(private calendarService: CalendarService, private destroyRef: DestroyRef) {
  }

  ngOnInit(): void {
    this.initializeFormControls();
    this.listenForControlsChanges();
  }

  private initializeFormControls(): void {
    const now = new Date();
    this.monthFormControl = new FormControl<number>(now.getMonth());
    this.yearFormControl = new FormControl<number>(now.getFullYear());
  }

  private listenForControlsChanges(): void {
    merge(
      this.monthFormControl.valueChanges.pipe(map((value) => ({ type: 'MONTH', value }))),
      this.yearFormControl.valueChanges.pipe(map((value) => ({ type: 'YEAR', value })))
    ).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ type, value }) => {
      type === 'MONTH' ? this.calendarService.setMonth(value) : this.calendarService.setYear(value);
    });
  }
}
