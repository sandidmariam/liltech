import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutismeComponent } from './autisme.component';

describe('AutismeComponent', () => {
  let component: AutismeComponent;
  let fixture: ComponentFixture<AutismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
