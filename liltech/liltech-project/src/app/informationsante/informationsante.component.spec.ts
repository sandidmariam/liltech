import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsanteComponent } from './informationsante.component';

describe('InformationsanteComponent', () => {
  let component: InformationsanteComponent;
  let fixture: ComponentFixture<InformationsanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
