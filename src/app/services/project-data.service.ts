import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { projectData } from '../types/projectData';
import { Project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor() { }
  getProjects(){
    return projectData;
  }

  getProjectByName(name:string){
    return projectData.find((element)=> element.urlName == name);
  }
}
