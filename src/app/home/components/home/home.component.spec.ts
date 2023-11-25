import { HomeComponent } from './home.component';
import { Spectator, createComponentFactory } from "@ngneat/spectator/jest";
import { MenuItemComponent } from "@home/components/menu-item/menu-item.component";
import { RouterTestingModule } from "@angular/router/testing";

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    componentMocks: [MenuItemComponent],
    imports: [RouterTestingModule]
  });

  beforeEach( () => {
   spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
