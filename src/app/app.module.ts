import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { TaskInProgressComponent } from './task-in-progress/task-in-progress.component';
import { TaskCompletedComponent } from './task-completed/task-completed.component';
import { TaskserviceService } from './shared/taskservice.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TaskComponent } from './task/task.component';
import { ModalModule } from 'ngx-bootstrap';
import { TaskListPanelComponent } from './task-list-panel/task-list-panel.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ModalService } from './shared/modal.service';


@NgModule({

  declarations: [
    AppComponent,
    TodotaskComponent,
    TaskInProgressComponent,
    TaskCompletedComponent,
    TaskComponent,
    TaskListPanelComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    ConfirmModalComponent,
  ],
  providers: [TaskserviceService,ModalService],
  bootstrap: [AppComponent]

})

export class AppModule { }
