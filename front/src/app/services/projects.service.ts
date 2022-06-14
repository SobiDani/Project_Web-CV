import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor( private http: HttpClient ) { }

  public getProjects() {
    return this.http.get("http://localhost:8069/projects")
  }

  public postProjects(newProjects: any) {
    return this.http.post("http://localhost:8069/projects", newProjects)
  }

  public putProjects(projectsID: any, editedProjects: any) {
    return this.http.put("http://localhost:8069/projects/" + projectsID, editedProjects)
  }

  public deleteProjects(projectsID: any){
    return this.http.delete("http://localhost:8069/projects/" + projectsID)
  }

  public ProjectsData = {
    name: "",
    description: "",
    URL: "",
    image: "",
    _id: ""
  }

  public clearProjects() {
    this.ProjectsData = {
      name: "",
      description: "",
      URL: "",
      image: "",
      _id: ""
    }
  }
  
  public editItem(item: any) {
    this.ProjectsData = item;
  }
}
