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
        src: "https://cdn.wccftech.com/wp-content/uploads/2017/05/Shadows_Colossus_Art.jpg",
        alt: "Shadow of the Colossus"
      },
      logoTitular: {
        src: "https://cdn.wccftech.com/wp-content/uploads/2017/05/Shadows_Colossus_Art.jpg",
        alt: "Shadow of the Colossus"
      },
      nombreTitular: "Nombre Example",
      profesionTitular: "Full Stack Developer",
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
