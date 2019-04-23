import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnesRoutingModule } from './personnes-routing.module';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { PersonnesService } from './services/personnes.service';

@NgModule({
  declarations: [
    ListeComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PersonnesRoutingModule
  ],
  providers: [PersonnesService]
})
export class PersonnesModule { }
