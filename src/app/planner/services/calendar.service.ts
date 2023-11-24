import { computed, Injectable, Signal, signal } from "@angular/core";

type CalendarGrid = { dayOfMonth: number, date: Date, positionClass: string }[];

@Injectable({ providedIn: 'root' })
export class CalendarService {
  private label = computed<string>(() => {
    const year = this.year();
    const month = this.month();
    return `${new Date(year, month, 1).toLocaleString('default', { month: 'long', year: 'numeric' })}`;
  })
  private month = signal<number>(new Date().getMonth());
  private state = computed<CalendarGrid>(() => {
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
  private year = signal<number>(new Date().getFullYear());

  getCalendarGrid(): Signal<CalendarGrid> {
    return this.state;
  }

  getCalendarLabel(): Signal<string> {
    return this.label;
  }

  setMonth(monthIndex: number): void {
    this.month.set(monthIndex);
  }

  setYear(year: number): void {
    this.year.set(year);
  }
}
