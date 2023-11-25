import { PlannerComponent } from './planner.component';
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";

describe('PlannerComponent', () => {
  let spectator: Spectator<PlannerComponent>;
  const createComponent = createComponentFactory({
    component: PlannerComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
