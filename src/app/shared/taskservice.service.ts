import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class TaskserviceService {

  private add_entity_url;
  private delete_entry_url 

  taskList: Task[];
  task: Task;
  statusCode:string;
  private deletetThisTask = new BehaviorSubject<Task>(null);
  currentTaskToBeDeleted = this.deletetThisTask.asObservable();
  
  constructor(private http: HttpClient) { }

  changeTask(task:Task){
    this.deletetThisTask.next(task);
  }

  getAllTask(): Observable<Task[]> {
    this.add_entity_url = environment.REST_API_URL + 'tasks';
    return this.http.get<Task[]>(this.add_entity_url)
      .map(data => _.values(data))
      .catch(this.handleError);
  }

  deleteTask(tasKDelete:Task): Observable<any>{
    this.delete_entry_url = environment.REST_API_URL + 'tasks';
    if(!tasKDelete){
      tasKDelete = new Task();
      tasKDelete.id='-1';   
    }
    this.delete_entry_url = this.delete_entry_url + "/"+tasKDelete.id;
    return this.http.delete(this.delete_entry_url)
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
