import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBelieveComponent } from './my-believe.component';

describe('MyBelieveComponent', () => {
  let component: MyBelieveComponent;
  let fixture: ComponentFixture<MyBelieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBelieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBelieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
