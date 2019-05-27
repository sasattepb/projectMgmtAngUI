import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  @Input() projectData = { prod_name:'', prod_desc: '', prod_price: 0 };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProject() {
    this.rest.addProject(this.projectData).subscribe((result) => {
      this.router.navigate(['/project-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

  addTask() {
    this.router.navigate(['/project-add']);
  }
}