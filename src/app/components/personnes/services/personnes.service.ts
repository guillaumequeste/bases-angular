import { Injectable } from '@angular/core';
import { Personne } from '../personne';
import { PERSONNES } from '../mock-personnes';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
  getPersonnes(): Personne[] {
    return PERSONNES;
  }
  getPersonne(id: number): Personne {
    const personnes = this.getPersonnes();
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < personnes.length; index++) {
      if (id === personnes[index].id) {
        return personnes[index];
      }
    }
  }
}
