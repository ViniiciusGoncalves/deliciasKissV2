import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDeliciasKissComponent } from './nav-delicias-kiss.component';

describe('NavDeliciasKissComponent', () => {
  let component: NavDeliciasKissComponent;
  let fixture: ComponentFixture<NavDeliciasKissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDeliciasKissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDeliciasKissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
