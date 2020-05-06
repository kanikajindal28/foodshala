import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitRestaurantComponent } from './visit-restaurant.component';

describe('VisitRestaurantComponent', () => {
  let component: VisitRestaurantComponent;
  let fixture: ComponentFixture<VisitRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
