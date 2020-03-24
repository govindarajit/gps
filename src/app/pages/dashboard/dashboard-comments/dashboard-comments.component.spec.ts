import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCommentsComponent } from './dashboard-comments.component';

describe('DashboardCommentsComponent', () => {
  let component: DashboardCommentsComponent;
  let fixture: ComponentFixture<DashboardCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
