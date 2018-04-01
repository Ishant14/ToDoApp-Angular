import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInProgressComponent } from './task-in-progress.component';

describe('TaskInProgressComponent', () => {
  let component: TaskInProgressComponent;
  let fixture: ComponentFixture<TaskInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
