import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-list-panel',
  templateUrl: './task-list-panel.component.html',
  styleUrls: ['./task-list-panel.component.css']
})
export class TaskListPanelComponent implements OnInit {

  @Input() taskList : Task[];


  constructor() { }

  ngOnInit() {
  }

}
