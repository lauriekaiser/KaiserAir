import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitytableComponent } from './citytable.component';

describe('CitytableComponent', () => {
  let component: CitytableComponent;
  let fixture: ComponentFixture<CitytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitytableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
