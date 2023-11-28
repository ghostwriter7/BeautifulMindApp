import { MenuItemComponent } from './menu-item.component';
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { RouterTestingModule } from "@angular/router/testing";

describe('MenuItemComponent', () => {
  let spectator: Spectator<MenuItemComponent>;
  const createComponent = createComponentFactory({
    component: MenuItemComponent,
    imports: [RouterTestingModule]
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        menuItem: { icon: 'ANY_ICON', label: 'ANY_LABEL', route: 'ANY_ROUTE' }
      }
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
