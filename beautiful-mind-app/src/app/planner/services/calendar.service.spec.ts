import { SpectatorService } from "@ngneat/spectator";
import { CalendarService } from "@planner/services/calendar.service";
import { createServiceFactory } from "@ngneat/spectator/jest";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CALENDAR_NOW_TOKEN } from "@planner/tokens";

describe('CalendarService', () => {
  let spectator: SpectatorService<CalendarService>;
  const createService = createServiceFactory({
    service: CalendarService,
    imports: [HttpClientTestingModule],
    providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date() }]
  });

  describe('goToNextMonth', () => {
    it('sets the calendar to January 2024 since the current view is December 2023', () => {
      spectator = createService({
        providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date(2023, 11, 1) }]
      });
      const { service } = spectator;
      service.goToNextMonth();
      expect(service.year()).toBe(2024);
      expect(service.month()).toBe(0);
    });

    it('sets the calendar to July 2025 since the current view is June 2025', () => {
      spectator = createService({
        providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date(2025, 5, 1) }]
      });
      const { service } = spectator;
      service.goToNextMonth();
      expect(service.year()).toBe(2025);
      expect(service.month()).toBe(6);
    });
  });
  describe('goToPreviousMonth', () => {
    it('sets the calendar to December 2024 since the current view is January 2025', () => {
      spectator = createService({
        providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date(2025, 0, 1) }]
      });
      const { service } = spectator;
      service.goToPreviousMonth();
      expect(service.year()).toBe(2024);
      expect(service.month()).toBe(11);
    });

    it('sets the calendar to March 2023 since the current view is April 2023', () => {
      spectator = createService({
        providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date(2023, 3, 1) }]
      });
      const { service } = spectator;
      service.goToPreviousMonth();
      expect(service.year()).toBe(2023);
      expect(service.month()).toBe(2);
    });
  });

  it('sets year and month to the initial state', () => {
    const anySelectedYear = 2030;
    const anySelectedMonth = 10;
    const currentYear = 2025;
    const currentMonth = 6;

    spectator = createService({
      providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date(currentYear, currentMonth, 1) }]
    });
    const { service } = spectator;
    service.year.set(anySelectedYear);
    service.month.set(anySelectedMonth);

    service.setToday();

    expect(service.year()).toBe(currentYear);
    expect(service.month()).toBe(currentMonth);
  });

  describe('isNextButtonDisabled', () => {
    it('disables the next button since the current view is December 2032 (the last view)', () => {
      spectator = createService({
        providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date(2032, 11, 1) }]
      });
      expect(spectator.service.isNextButtonDisabled()).toBe(true);
    });

    it('keeps the next button enabled since the current view - June 2026 is within the app range', () => {
      spectator = createService({
        providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date(2026, 5, 1) }]
      });
      expect(spectator.service.isNextButtonDisabled()).toBe(false);
    });
  });

  describe('isPrevButtonDisabled', () => {
    it('disables the prev button since the current view is January 2023 (the first view)', () => {
      spectator = createService({
        providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date(2023, 0, 1) }]
      });
      expect(spectator.service.isPrevButtonDisabled()).toBe(true);
    });

    it('keeps the prev button enabled since the current view - June 2026 is within the app range', () => {
      spectator = createService({
        providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: new Date(2026, 5, 1) }]
      });
      expect(spectator.service.isPrevButtonDisabled()).toBe(false);
    });
  });

  describe('label', () => {
    [
      { currentViewAsDate: new Date(2023, 6, 1), label: 'July 2023' },
      {
        currentViewAsDate: new Date(2030, 11, 1),
        label: 'December 2030'
      },
      { currentViewAsDate: new Date(2027, 0, 1), label: 'January 2027' }]
      .forEach(({ currentViewAsDate, label }, index) => {
        it(`${index}# sets the label to ${label} if the current view is ${currentViewAsDate.toISOString()}`,
          () => {
            spectator = createService({
              providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: currentViewAsDate }]
            });
            expect(spectator.service.label()).toBe(label);
          })
      });
  });

  describe('grid', () => {
    [
      { currentViewAsDate: new Date(2024, 6, 1), numberOfDays: 31, firstDayWeekIndex: 1, lastDayWeekIndex: 3 },
      { currentViewAsDate: new Date(2023, 10, 1), numberOfDays: 30, firstDayWeekIndex: 3, lastDayWeekIndex: 4 }
    ].forEach(({ currentViewAsDate, numberOfDays, firstDayWeekIndex, lastDayWeekIndex }) => {
      it('sets the grid signal correctly', () => {
        spectator = createService({
          providers: [{ provide: CALENDAR_NOW_TOKEN, useValue: currentViewAsDate }]
        });
        const currentGrid = spectator.service.grid();
        expect(currentGrid.length).toBe(numberOfDays);
        expect(currentGrid[0].date.getDay()).toBe(firstDayWeekIndex);
        expect(currentGrid.at(-1).date.getDay()).toBe(lastDayWeekIndex);
      });
    });
  });
});
