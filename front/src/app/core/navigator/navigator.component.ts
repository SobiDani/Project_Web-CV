import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  public ProjectsData = {
    name: "",
    description: "",
    URL: "",
    image: "",
    _id: "",
    id_herramientas: [],
  }
  public projectsForm!: FormGroup;
  public gestionOn?: boolean;

  constructor(private ProjectsService: ProjectsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  click(ruta: string) {
    if(ruta === 'gestion'){
      
      /* this.ProjectsService.clearProjects();
      this.projectsForm = this.formBuilder.group({
        name: "",
      description: "",
      URL: "",
      image: "",
      _id: "",
      id_herramientas: [],
      });
      alert('borrando');
      this.projectsForm.reset(true); */
      this.gestionOn = true;
      
      /* location.reload();
      this.router.navigate(["/gestion"]); */
      
    }
    
  alert("Respeta, no borres cosas ni metas nada");
}

}
