import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModeSelectorComponent } from './auth-mode-selector.component';

describe('AuthModeSelectorComponent', () => {
  let component: AuthModeSelectorComponent;
  let fixture: ComponentFixture<AuthModeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthModeSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthModeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
