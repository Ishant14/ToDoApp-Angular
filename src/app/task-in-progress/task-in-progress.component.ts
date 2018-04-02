import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskserviceService } from '../shared/taskservice.service';

@Component({
  selector: 'app-task-in-progress',
  templateUrl: './task-in-progress.component.html',
  styleUrls: ['./task-in-progress.component.css']
})
export class TaskInProgressComponent implements OnInit {

  taskList: Task[];
  canDelete : boolean;
  taskToBeDeleted : Task;

  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
    this.getTask();
    this.taskService.currentTaskToBeDeleted.subscribe(
      task => {
        if (task) {
          this.deleteTask(task)
        }
      }
    );
  }

  getTask() {
    this.taskService.getAllTask().subscribe(data => {
      this.taskList = [];
      data.map((task) => {
        if (task.status === 'progress') {
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
