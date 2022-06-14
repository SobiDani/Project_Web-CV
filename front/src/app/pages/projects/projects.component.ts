import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { projectsInterface, herramientasInterface } from 'src/app/models/navegador-interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  /* public herramientas!: herramientasInterface[]; */
  public projects: projectsInterface[] = [];
  constructor(private projecstService: ProjectsService ) { }

  ngOnInit(): void {
    this.projecstService.getProjects().subscribe((data: any) => {
      this.projects = data.Projects;
      console.log(this.projects);
      /* console.log(this.projects[0].id_herramientas); */
    })
  }
}
