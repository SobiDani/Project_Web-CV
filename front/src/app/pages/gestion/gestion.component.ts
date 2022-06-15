import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { projectsInterface, herramientasInterface } from 'src/app/models/navegador-interface';

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
  public herramientas?: any[]; 
  public divHerramientas$$: any = document.querySelectorAll('.herramientasDiv');
  public selectValores?: any[];
  public selectedHerramienta?: any[] = [];
  public htmlToAdd?: any;
  public objetoHerramienta?: any;

  constructor(private formBuilder: FormBuilder, private HerramientasService: ProjectsService, private ProjectsService: ProjectsService, private router: Router) {
    
   }

  ngOnInit(): void {
    
    this.ProjectsService.clearProjects();

    this.projectsForm = this.formBuilder.group({
      name: [this.newProjects.name, [Validators.required, Validators.minLength(1)]],
      description: [this.newProjects.description, [Validators.required, Validators.minLength(4)]],
      URL: [this.newProjects.URL, [Validators.required]],
      image: [this.newProjects.image, [Validators.required, Validators.minLength(1)]],
      id_herramientas: [this.newProjects.id_herramientas, [Validators.minLength(1)]],
    });


    this.projectsForm.valueChanges.subscribe((changes) => {
      console.log(changes);
      this.newProjects = changes;
    })

    this.HerramientasService.getHerramientas().subscribe((data: any) => {
      this.herramientas = data.Herramientas;

     /*  console.log(data.Herramientas); */
      
    })
  }

  public onSubmit() {
    /* console.log(this.newProjects); */
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

  public crearHerramienta(evento: any) {
    

    this.selectValores = evento.target.value.split("-.-");
    
    this.selectedHerramienta?.push(this.selectValores);

    /* console.log(this.selectedHerramienta); */

    /* this.htmlToAdd = "<input type='text' value="+evento.target.value+" formControlName='id_herramientas' "; */
    /* this.htmlToAdd = '<span><input type="text"/></span>'; */
  }

}
