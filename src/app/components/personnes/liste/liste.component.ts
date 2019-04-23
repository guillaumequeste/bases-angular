import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../personne';
import { PERSONNES } from '../mock-personnes';
import { PersonnesService } from '../services/personnes.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  personnes: Personne[] = null;
  constructor(private router: Router, private personnesService: PersonnesService) { }

  ngOnInit(): void {
    this.getPersonnes();
  }
  getPersonnes(): void {
    this.personnes = this.personnesService.getPersonnes();
  }
  selectPersonne(personne: Personne): void {
    const link = ['/personne', personne.id];
    this.router.navigate(link);
  }

}
