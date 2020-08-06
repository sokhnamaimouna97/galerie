import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalerieComponent } from './galerie/galerie.component';
import { DetailphotoComponent } from './detailphoto/detailphoto.component';



const routes: Routes = [
  {path : 'galerie' , component: GalerieComponent},
  {path : 'detailphoto/{id}' , component: DetailphotoComponent},
  {path:'' , redirectTo:'/galerie' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
