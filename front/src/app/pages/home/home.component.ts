import { Component, OnInit } from '@angular/core';
import { bannersInterface } from 'src/app/models/navegador-interface';
import { ProjectsService } from 'src/app/services/projects.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public bannerInfo: bannersInterface;
  public arrayUsers?: any;
    


  constructor(private HerramientasService: ProjectsService) {
    this.bannerInfo = {
      imgTitular: {
        src: "https://res.cloudinary.com/dzivvzwq0/image/upload/v1654004338/nombreDeVuestraCarpeta/pipsxskggkfrn8otd4ui.jpg",
        alt: "Shadow of the Colossus"
      },
      logoTitular: {
        src: "https://res.cloudinary.com/dzivvzwq0/image/upload/v1654004338/nombreDeVuestraCarpeta/pipsxskggkfrn8otd4ui.jpg",
        alt: "Shadow of the Colossus"
      },
      nombreTitular: "Daniel Jara",
      profesionTitular: "Full Stack Developer",
      slidePersonal: [
      {
        text: "·The purpose of this project is to be able to show all the projects I have made, storing them in my own database,showing an example, whith a small description, the link to see the code and the tools used.",
        id: "primero"
      }, 
      {
        text: "·The functionalities of this project are to be able to add any new work done from the page and send it directly to the database without going through it. In addition to this, if there has been a mistake when writing it, you will have the possibility to edit or even delet it, as I said before, without touching the database",
        id: "segundo"
      }, 
      {
        text: "·In short, thanks to this page I can update my portfolio without any effort",
        id: "tercero"
      }
      ]  
    }
   }

  ngOnInit(): void {
    this.HerramientasService.getUsers().subscribe((data: any) => {
      this.arrayUsers = data.Users;
      for (const user of this.arrayUsers) {

        if(user._id === "62a9f4ecfd930581074924c8"){
          this.bannerInfo = {
            imgTitular: {
              src: user.img,
              alt: "perfil de imagen"
            },
            logoTitular: {
              src: user.img,
              alt: "logotipo titular"
            },
            nombreTitular: user.name + " " + user.surnames ,
            profesionTitular: user.title,
            slidePersonal: [
            {
              text: "textlor lorem100 asdsad asd asdasdsadasasdas sadsadasd asdsadsadsad",
              id: "primero"
            }, 
            {
              text: "segundo lorem100 asdsad asd asdasdsadasasdas sadsadasd asdsadsadsad",
              id: "segundo"
            }, 
            {
              text: "tercero lorem100 asdsad asd asdasdsadasasdas sadsadasd asdsadsadsad",
              id: "tercero"
            }
            ]  
            
          }
        }
        
      }

      
    })
  }

  
}
