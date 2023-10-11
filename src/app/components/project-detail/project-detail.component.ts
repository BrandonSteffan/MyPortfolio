import { Component } from '@angular/core';
import { Project } from 'src/app/types/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  constructor(
    private service : ProjectDataService,
    private route : ActivatedRoute,
    private location: Location
  ){}
  project?: Project;
  name?: string | null ;
  
  ngOnInit(){
    this.name = this.route.snapshot.paramMap.get("urlName");
    if(this.name)
    this.project = this.service.getProjectByName(this.name);
  }

  goBack(){
    this.location.back();
  }
}
