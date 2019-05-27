import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  @Input() projectData:any = { prod_name: '', prod_desc: '', prod_price:0 };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProject(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.projectData = data;
    });
  }

  updateProject() {
    this.rest.updateProject(this.route.snapshot.params['id'], this.projectData).subscribe((result) => {
      this.router.navigate(['/project-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}