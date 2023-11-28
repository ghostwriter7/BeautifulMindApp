import { DayTileComponent } from './day-tile.component';
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";

describe('DayTileComponent', () => {
  let spectator: Spectator<DayTileComponent>;
  const createComponent = createComponentFactory({
    component: DayTileComponent
  });

  beforeEach(() => {
    spectator = createComponent({
      props: { day: { dayOfMonth: 1, date: new Date(), positionClass: 'ANY_CLASS' } }
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
