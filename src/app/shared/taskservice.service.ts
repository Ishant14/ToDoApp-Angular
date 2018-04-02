import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TaskserviceService {

  private add_entity_url;
  private delete_entry_url 
  private post_entry_url;

  taskList: Task[];
  task: Task;
  statusCode:string;
  private deletetThisTask = new BehaviorSubject<Task>(null);
  currentTaskToBeDeleted = this.deletetThisTask.asObservable();
  newTasKCreated = new Subject<Task>();
  
  constructor(private http: HttpClient) { }

  changeTask(task:Task){
    this.deletetThisTask.next(task);
  }

  taskCreated(task:Task){
    this.newTasKCreated.next(task);
  }


  getAllTask(): Observable<Task[]> {
    this.add_entity_url = environment.REST_API_URL + 'tasks';
    return this.http.get<Task[]>(this.add_entity_url)
      .map(data => _.values(data))
      .catch(this.handleError);
  }

  deleteTask(tasKDelete:Task): Observable<any>{
    this.delete_entry_url = environment.REST_API_URL + 'tasks';
    this.delete_entry_url = this.delete_entry_url + "/"+tasKDelete.id;
    return this.http.delete(this.delete_entry_url)
    .catch(this.handleError);
  }

  saveTask(task:Task){
    this.add_entity_url = environment.REST_API_URL + 'tasks';
    return this.http.post(this.add_entity_url,task)
    .catch(this.handleError);
  }


  
  private handleError(error: HttpErrorResponse) {
    debugger;
    console.log(error);
    let errorMessage = '';
    if (error instanceof Error) {
      errorMessage = `An error occurred: ${error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

}
