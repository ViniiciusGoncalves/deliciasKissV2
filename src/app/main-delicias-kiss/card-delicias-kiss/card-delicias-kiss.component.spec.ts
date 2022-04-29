import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDeliciasKissComponent } from './card-delicias-kiss.component';

describe('CardDeliciasKissComponent', () => {
  let component: CardDeliciasKissComponent;
  let fixture: ComponentFixture<CardDeliciasKissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDeliciasKissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDeliciasKissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
