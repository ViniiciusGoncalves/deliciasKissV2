import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreConfeiteiraComponent } from './sobre-confeiteira.component';

describe('SobreConfeiteiraComponent', () => {
  let component: SobreConfeiteiraComponent;
  let fixture: ComponentFixture<SobreConfeiteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreConfeiteiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreConfeiteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
