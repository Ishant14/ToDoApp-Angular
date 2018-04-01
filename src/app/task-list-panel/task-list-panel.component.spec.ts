import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListPanelComponent } from './task-list-panel.component';

describe('TaskListPanelComponent', () => {
  let component: TaskListPanelComponent;
  let fixture: ComponentFixture<TaskListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
