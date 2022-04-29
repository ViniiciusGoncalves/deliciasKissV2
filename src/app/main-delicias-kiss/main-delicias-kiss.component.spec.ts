import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeliciasKissComponent } from './main-delicias-kiss.component';

describe('MainDeliciasKissComponent', () => {
  let component: MainDeliciasKissComponent;
  let fixture: ComponentFixture<MainDeliciasKissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDeliciasKissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeliciasKissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
