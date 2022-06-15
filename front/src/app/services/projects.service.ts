import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor( private http: HttpClient ) { }

  public getHerramientas() {
    return this.http.get("http://localhost:8069/herramientas")
    
  }
  public getHerramientasId(idHerramientas: any) {
    console.log(idHerramientas[1].replace("\'", "").replace("\'", ""));
    return this.http.get("http://localhost:8069/herramientas/id/" + idHerramientas[1].replace("\'", "").replace("\'", ""))
    
  }    

  public ProjectsData = {
    name: "",
    description: "",
    URL: "",
    image: "",
    _id: "",
    id_herramientas: [],
  }

  public clearProjects() {
    this.ProjectsData = {
      name: "",
      description: "",
      URL: "",
      image: "",
      _id: "",
      id_herramientas: [],
    }
  }
  
  public editItem(item: any) {
    this.ProjectsData = item;
  }

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
}
