import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskserviceService } from '../shared/taskservice.service';
import { ModalService } from '../shared/modal.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() task: Task;
  constructor(private taskService: TaskserviceService, private modalService: ModalService) { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    this.modalService.openConfirmDialog().subscribe(
      canDelete => {
        if(canDelete) {
          this.taskService.changeTask(task);
        }
      })

  }

}
