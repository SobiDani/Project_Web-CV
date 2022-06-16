import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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

  public gestionOn?: boolean;

  constructor(private formBuilder: FormBuilder, private HerramientasService: ProjectsService, private ProjectsService: ProjectsService, private router: Router) {
    this.formBuilder.group({
      name: String,
      description: String,
      URL: String,
      image: String,
      id_herramientas: this.newProjects.id_herramientas,   
    })
    
   }

  ngOnInit(): void {
    if(this.gestionOn){
      location.reload();
    }
    this.ProjectsService.clearProjects();
    this.projectsForm = this.formBuilder.group({
      name: [this.newProjects.name, [Validators.required, Validators.minLength(1)]],
      description: [this.newProjects.description, [Validators.required, Validators.minLength(4)]],
      URL: [this.newProjects.URL, [Validators.required]],
      image: [this.newProjects.image, [Validators.required, Validators.minLength(1)]],
      id_herramientas: [this.newProjects.id_herramientas],
    });

    
    this.projectsForm.valueChanges.subscribe((changes) => {
      
      this.newProjects = changes;
      console.log(this.newProjects);
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
      console.log(this.newProjects);
      
      this.ProjectsService.postProjects(this.newProjects).subscribe();
      alert("Projects created");

    }
   /*  this.projectsForm.reset(); */
    this.router.navigate(["/projects"]);

  }

  public delete() {
    this.ProjectsService.deleteProjects(this.newProjects._id).subscribe();
    this.ProjectsService.clearProjects();
    alert("Projects deleted");
    this.router.navigate(["/projects"]);
  }

  public crearHerramienta(evento: any) {
    

    /* this.selectValores = evento.target.value.split(" "); */
    
    /* this.selectedHerramienta?.push(evento.target.value); */

    this.HerramientasService.getHerramientasId(evento.target.value.split(" ")).subscribe((data: any) => {
      
      console.log(data.Herramienta);

      this.selectedHerramienta?.push(data.Herramienta);

     /*  console.log(data.Herramientas); */
      
    });

    /* console.log(this.selectedHerramienta); */



    /* console.log(this.projectsForm); */

 
   /*  this.newProjects.id_herramientas.push(this.selectValores); */


    /* console.log(this.selectedHerramienta); */

    /* this.htmlToAdd = "<input type='text' value="+evento.target.value+" formControlName='id_herramientas' "; */
    /* this.htmlToAdd = '<span><input type="text"/></span>'; */
  }

}
