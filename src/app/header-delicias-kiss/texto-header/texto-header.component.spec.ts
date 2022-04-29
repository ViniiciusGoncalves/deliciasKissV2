import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoHeaderComponent } from './texto-header.component';

describe('TextoHeaderComponent', () => {
  let component: TextoHeaderComponent;
  let fixture: ComponentFixture<TextoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
