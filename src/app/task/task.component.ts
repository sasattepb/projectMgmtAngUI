import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.gettasks();
  }

  
  gettasks() {
    this.tasks = [];
    this.rest.getTasks().subscribe((data: {}) => {
      console.log(data);
      this.tasks = data;
    });
  }

  addTask() {
    this.router.navigate(['/task-add']);
  }

  delete(id) {
    this.rest.deleteTask(id)
      .subscribe(res => {
          this.gettasks();
        }, (err) => {
          console.log(err);
        }
      );
  }

  
  addProject() {
    this.router.navigate(['/project-add']);
  }

  addUser() {
    this.router.navigate(['/user-add']);
  }

  viewTask() {
    this.router.navigate(['/task']);
  }  
}
