import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { projectsInterface } from 'src/app/models/navegador-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects?: projectsInterface[];

  constructor(private projecstService: ProjectsService, private router: Router) { }

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
