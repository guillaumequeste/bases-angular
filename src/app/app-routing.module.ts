import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { NormalComponent } from './components/normal/normal.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { ApiComponent } from './components/api/api.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { PanierComponent } from './components/panier/panier.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'normal', component: NormalComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'api', component: ApiComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'notfound', component: ErreurComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
