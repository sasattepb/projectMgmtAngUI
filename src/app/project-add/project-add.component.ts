import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  @Input() projectData = { project:'', startDate: '', endDate: '', priority: 0 };
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


  addProject() {
    this.rest.addProject(this.projectData).subscribe((result) => {
      //this.router.navigate(['/project-details/'+result.projectId]);
      this.getprojects();
    }, (err) => {
      console.log(err);
    });
  }

  addTask() {
    this.router.navigate(['/task-add']);
  }

  addUser() {
    this.router.navigate(['/user-add']);
  }

  viewTask() {
    this.router.navigate(['/task']);
  }   
    
}