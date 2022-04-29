import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDeliciasKissComponent } from './header-delicias-kiss.component';

describe('HeaderDeliciasKissComponent', () => {
  let component: HeaderDeliciasKissComponent;
  let fixture: ComponentFixture<HeaderDeliciasKissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDeliciasKissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDeliciasKissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
