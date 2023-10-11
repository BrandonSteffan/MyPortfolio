import { Component } from '@angular/core';
import { Project } from 'src/app/types/project';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private service : ProjectDataService){}
  projects : Project[] = this.service.getProjects();
}
