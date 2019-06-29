import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Input() taskData = { prentId:0, projectId:0, task:'', startDate: '', endDate: '', priority: 0, status:''};
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
    this.rest.addTask(this.taskData).subscribe((result) => {
      //this.router.navigate(['/project-details/'+result.projectId]);
      this.gettasks();
    }, (err) => {
      console.log(err);
    });
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
