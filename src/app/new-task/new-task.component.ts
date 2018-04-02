import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskserviceService } from '../shared/taskservice.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTaskFrom: FormGroup;

  ngOnInit() {
  
  }

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private taskService:TaskserviceService) { 
    this.createForm();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  private createForm() {
    this.newTaskFrom = new FormGroup({
      'id': new FormControl({ value: '', disabled: true }),
      'taskName': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'taskDesc': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'status': new FormControl('', Validators.required)
    });
  }

  submitNewTask(formData:FormGroup){
    console.log("Form:"+this.newTaskFrom);
    var task = new Task();
    task.taskName = formData.controls['taskName'].value;
    task.taskDesc = formData.controls['taskDesc'].value;
    task.status = formData.controls['status'].value;
    this.taskService.saveTask(task)
    .subscribe(
      result=>{
        //console.log(result);
        this.modalRef.hide()
        if(result){
            this.taskService.taskCreated(result);
        }
      },
      error=>{
          console.log("Error while creating task :"+ error.task);
      }
    );
  }

  cancelNewTaskFrom(){
    this.newTaskFrom.reset();
    this.modalRef.hide()
  }

}
