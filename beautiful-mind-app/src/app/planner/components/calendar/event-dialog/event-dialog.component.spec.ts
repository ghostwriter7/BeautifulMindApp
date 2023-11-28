import { EventDialogComponent } from './event-dialog.component';
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

describe('EventDialogComponent', () => {
  let spectator: Spectator<EventDialogComponent>;
  const createComponent = createComponentFactory({
    component: EventDialogComponent,
    providers: [{ provide: MatDialogRef, useValue: {} }],
    imports: [MatDialogModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
