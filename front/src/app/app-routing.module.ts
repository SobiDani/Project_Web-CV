import { ProjectsComponent } from './pages/projects/projects.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch: "full" },
  {path:"projects", component: ProjectsComponent},
  {path:"gestion", component: GestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
