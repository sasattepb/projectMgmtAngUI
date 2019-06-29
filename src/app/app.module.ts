import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { TaskComponent } from './task/task.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';


const appRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent,
    data: { title: 'Project List' }
  },
  {
    path: 'project-details/:id',
    component: ProjectDetailComponent,
    data: { title: 'Project Details' }
  },
  {
    path: 'project-add',
    component: ProjectAddComponent,
    data: { title: 'Project Add' }
  },
  {
    path: 'project-edit/:id',
    component: ProjectEditComponent,
    data: { title: 'Project Edit' }
  },
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'User List' }
  },
  {
    path: 'user-add',
    component: UserAddComponent,
    data: { title: 'User Add' }
  },{
    path: 'task',
    component: TaskComponent,
    data: { title: 'Task List' }
  },{
    path: 'task-add',
    component: TaskAddComponent,
    data: { title: 'Task Add' }
  },
  { path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  }
];

@NgModule({

  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectAddComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    TaskComponent,
    TaskAddComponent,
    UserComponent,
    UserAddComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

