import { CalendarComponent } from './calendar.component';
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";

describe('CalendarComponent', () => {
  let spectator: Spectator<CalendarComponent>;
  const createComponent = createComponentFactory({
    component: CalendarComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
