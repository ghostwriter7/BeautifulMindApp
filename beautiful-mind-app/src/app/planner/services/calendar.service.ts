import { computed, Inject, Injectable, signal } from "@angular/core";
import { CALENDAR_NOW_TOKEN } from "@planner/tokens";

type CalendarGrid = CalendarDay[];
export type CalendarDay = { dayOfMonth: number, date: Date, positionClass: string };

@Injectable({ providedIn: 'root' })
export class CalendarService {
  grid = computed<CalendarGrid>(() => {
    const month = this.month();
    const year = this.year();

    const lastDateOfMonth = new Date(year, month + 1, 0);
    const lastDateIndex = lastDateOfMonth.getDate();

    return new Array(lastDateIndex).fill(0).map((_, index) => {
      const date = new Date(year, month, index + 1);
      const dayIndex = date.getDay() + 1;
      return { dayOfMonth: date.getDate(), date, positionClass: `calendar__day-${dayIndex}` }
    });
  });
  isNextButtonDisabled = computed<boolean>(() => {
    const year = this.year();
    const month = this.month();
    return year === 2032 && month === 11;
  });
  isPrevButtonDisabled = computed<boolean>(() => {
    const year = this.year();
    const month = this.month();
    return year === 2023 && month === 0;
  });
  label = computed<string>(() => {
    const year = this.year();
    const month = this.month();
    return `${new Date(year, month, 1).toLocaleString('default', { month: 'long', year: 'numeric' })}`;
  })
  month = signal<number>(this.now.getMonth());
  year = signal<number>(this.now.getFullYear());

  constructor(
    @Inject(CALENDAR_NOW_TOKEN) private now: Date) {
  }

  goToNextMonth(): void {
    const currentMonth = this.month();

    if (currentMonth === 11) {
      this.month.set(0);
      this.year.update((year) => year + 1);
    } else {
      this.month.update((month) => month + 1);
    }
  }

  goToPreviousMonth(): void {
    const currentMonth = this.month();

    if (currentMonth === 0) {
      this.month.set(11);
      this.year.update((year) => year - 1);
    } else {
      this.month.update((month) => month - 1);
    }
  }

  setMonth(monthIndex: number): void {
    this.month.set(monthIndex);
  }

  setToday(): void {
    this.year.set(this.now.getFullYear());
    this.month.set(this.now.getMonth());
  }

  setYear(year: number): void {
    this.year.set(year);
  }
}
