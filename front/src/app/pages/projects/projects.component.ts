import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: any
  constructor(private projecstService: ProjectsService ) { }

  ngOnInit(): void {
    this.projecstService.getProjects().subscribe(data => {
      this.projects = data;
      console.log(this.projects);
      
    })
  }
}
