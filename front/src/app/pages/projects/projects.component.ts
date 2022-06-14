import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';
import { projectsInterface, herramientasInterface } from 'src/app/models/navegador-interface';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects?: projectsInterface[];

  constructor(private projecstService: ProjectsService, private router: Router) { }

  /* public herramientas!: herramientasInterface[]; */


  ngOnInit(): void {
    this.projecstService.getProjects().subscribe((data: any) => {
      this.projects = data.Projects;

      console.log(data.Projects);
      
    })
  }

  public editProject(project: any){
    this.projecstService.editItem(project)
    this.router.navigate(["/gestion"])
  }}
