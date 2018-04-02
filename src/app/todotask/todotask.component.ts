import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../shared/taskservice.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-todotask',
  templateUrl: './todotask.component.html',
  styleUrls: ['./todotask.component.css']
})
export class TodotaskComponent implements OnInit {

  taskList: Task[];
  canDelete: boolean;
  taskToBeDeleted: Task;

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

    this.taskService.newTasKCreated.subscribe(
      task=>{
        if(task){
          this.taskList.push(task);
        }
      }
    );
  }

  getTask() {
    this.taskService.getAllTask().subscribe(data => {
      this.taskList = [];
      data.map((task) => {
        if (task.status === 'created') {
          this.taskList.push(task);
        }
      });
    }, error => {
      console.log(error);
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(data => {
       if(data){
        this.taskList = this.taskList.filter(task=>task.id !== data.id);
       }
      });
  }

}
