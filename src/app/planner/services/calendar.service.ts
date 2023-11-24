import { computed, Injectable, signal } from "@angular/core";

type CalendarGrid = { dayOfMonth: number, date: Date, positionClass: string }[];

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
  month = signal<number>(new Date().getMonth());
  year = signal<number>(new Date().getFullYear());

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
    const now = new Date();
    this.year.set(now.getFullYear());
    this.month.set(now.getMonth());
  }

  setYear(year: number): void {
    this.year.set(year);
  }
}
