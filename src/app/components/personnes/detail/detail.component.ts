
import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { Router, ActivatedRoute } from '@angular/router';
import { PERSONNES } from '../mock-personnes';
import { PersonnesService } from '../services/personnes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne = null;
  constructor(private route: ActivatedRoute, private router: Router, private personnesService: PersonnesService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personne = this.personnesService.getPersonne(id);
  }
  goBack(): void {
    this.router.navigate(['/personnes']);
  }
}
