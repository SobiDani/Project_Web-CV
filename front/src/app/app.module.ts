import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HerramientasComponent } from './pages/projects/herramientas/herramientas.component';
import { InputComponent } from './pages/gestion/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    ProjectsComponent,
    GestionComponent,
    HomeComponent,
    HerramientasComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
