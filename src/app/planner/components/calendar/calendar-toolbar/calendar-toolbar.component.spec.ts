import { CalendarToolbarComponent } from './calendar-toolbar.component';
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";

describe('CalendarToolbarComponent', () => {
  let spectator: Spectator<CalendarToolbarComponent>;
  const createComponent = createComponentFactory({
    component: CalendarToolbarComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
