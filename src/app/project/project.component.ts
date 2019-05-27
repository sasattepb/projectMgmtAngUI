import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getprojects();
  }

  getprojects() {
    this.projects = [];
    this.rest.getProjects().subscribe((data: {}) => {
      console.log(data);
      this.projects = data;
    });
  }

  addProj() {
    this.router.navigate(['/project-add']);
  }

  delete(id) {
    this.rest.deleteProject(id)
      .subscribe(res => {
          this.getprojects();
        }, (err) => {
          console.log(err);
        }
      );
  }

}