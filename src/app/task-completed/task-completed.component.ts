import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskserviceService } from '../shared/taskservice.service';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html',
  styleUrls: ['./task-completed.component.css']
})
export class TaskCompletedComponent implements OnInit {

  taskList: Task[];
  canDelete : boolean;
  taskToBeDeleted : Task;

  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
    this.getTask();
    this.taskService.currentTaskToBeDeleted.subscribe(task=>this.deleteTask(task));
  }

  getTask() {
    this.taskService.getAllTask().subscribe(data => {
      this.taskList = [];
      data.map((task) => {
        if (task.status === 'completed') {
          this.taskList.push(task);
        }
      });
    }, error => {
      console.log(error);
    });
  }

  deleteTask(task:Task){
    
      this.taskService.deleteTask(task)
      .subscribe(data=>{
        console.log(data)
      });
    
  }

}
