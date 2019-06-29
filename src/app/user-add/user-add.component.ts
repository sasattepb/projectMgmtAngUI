import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  users:any = [];
  @Input() userData = {firstName:'', lastName: '', employeeId:0, projectId:0, taskId:0};
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getusers();
  }

  getusers() {
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }

  addUser() {
    this.rest.addUser(this.userData).subscribe((result) => {
      //this.router.navigate(['/project-details/'+result.projectId]);
      this.getusers();
    }, (err) => {
      console.log(err);
    });
  }

  delete(id) {
    this.rest.deleteUser(id)
      .subscribe(res => {
          this.getusers();
        }, (err) => {
          console.log(err);
        }
      );
  }

  addProject() {
    this.router.navigate(['/project-add']);
  }

  addTask() {
    this.router.navigate(['/task-add']);
  }

  viewTask() {
    this.router.navigate(['/task']);
  }  

}
