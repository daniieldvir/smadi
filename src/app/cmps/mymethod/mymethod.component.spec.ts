import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymethodComponent } from './mymethod.component';

describe('MymethodComponent', () => {
  let component: MymethodComponent;
  let fixture: ComponentFixture<MymethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
