import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMethodComponent } from './my-method.component';

describe('MyMethodComponent', () => {
  let component: MyMethodComponent;
  let fixture: ComponentFixture<MyMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMethodComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
