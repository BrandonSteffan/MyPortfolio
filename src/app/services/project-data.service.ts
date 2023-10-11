import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { projectData } from '../types/projectData';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor() { }
  getProjects(){
    return projectData;
  }
}
