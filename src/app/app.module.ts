import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalComponent } from './components/normal/normal.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { PersonnesService } from './components/personnes/services/personnes.service';
import { PersonnesModule } from './components/personnes/personnes.module';
import { ApiComponent } from './components/api/api.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { PanierComponent } from './components/panier/panier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalComponent,
    ContactComponent,
    HeaderComponent,
    AccueilComponent,
    ErreurComponent,
    ApiComponent,
    AnimationsComponent,
    PanierComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    PersonnesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [PersonnesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
