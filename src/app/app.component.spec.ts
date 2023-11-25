import { AppComponent } from './app.component';
import { Spectator } from "@ngneat/spectator/jest";
import { createComponentFactory } from "@ngneat/spectator/jest";

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
