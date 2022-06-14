import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  public projectsForm!: FormGroup;
  public submmited: boolean = false;
  public newProjects = this.ProjectsService.ProjectsData;
  public projectsID = this.ProjectsService.ProjectsData._id;

  constructor(private formBuilder: FormBuilder, private ProjectsService: ProjectsService, private router: Router) {
    
   }

  ngOnInit(): void {
    
    //Con esta función siempre tendremos el formulario desde el comienzo.
    this.ProjectsService.clearProjects();

    this.projectsForm = this.formBuilder.group({
      name: [this.newProjects.name, [Validators.required, Validators.minLength(1)]],
      descripction: [this.newProjects.description, [Validators.required, Validators.minLength(4)]],
      URL: [this.newProjects.URL, [Validators.required]],
      image: [this.newProjects.image, [Validators.required, Validators.minLength(1)]]
    });

    //De esta forma añadimos al objeto por defecto de newProjects los valores del formulario automaticamente según vayan cambiando.
    this.projectsForm.valueChanges.subscribe((changes) => {
      this.newProjects = changes;
    })
  }

  public onSubmit() {
    if (this.projectsID !== "") {
      this.ProjectsService.putProjects(this.projectsID, this.newProjects).subscribe()
      alert("Projects edited");
    } else {
      this.ProjectsService.postProjects(this.newProjects).subscribe();
      alert("Projects created");
    }
    this.projectsForm.reset();
    this.router.navigate(["/Projectss"]);

  }

  public delete() {
    this.ProjectsService.deleteProjects(this.newProjects._id).subscribe();
    this.ProjectsService.clearProjects();
    alert("Projects deleted");
    this.router.navigate(["/projects"]);
  }

}
