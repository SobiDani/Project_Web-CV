import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

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

  constructor(private ProjectsService: ProjectsService, private formBuilder: FormBuilder) { }

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
      location.reload();
    }
    
  alert("Respeta, no borres cosas ni metas nada");
}

}
