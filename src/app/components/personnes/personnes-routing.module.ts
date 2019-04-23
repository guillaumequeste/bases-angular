import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';

const personnesRoutes: Routes = [
  { path: 'personnes', component: ListeComponent },
  { path: 'personne/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(personnesRoutes)],
  exports: [RouterModule]
})
export class PersonnesRoutingModule { }
