import { EventFormComponent } from './event-form.component';
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";

describe('EventFormComponent', () => {
  let spectator: Spectator<EventFormComponent>;
  const createComponent = createComponentFactory({
    component: EventFormComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  })

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
