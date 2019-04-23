import { Personne } from './personne';

export const PERSONNES: Personne[] = [
    {
        id: 1,
        nom: 'Legris',
        prenom: 'André',
        age: 68,
        profession: ['Policier', 'Agent'],
        photo: 'assets/img/andre.png',
        created: new Date()
    },
    {
        id: 2,
        nom: 'Lasso',
        prenom: 'Michel',
        age: 54,
        profession: ['Pompier'],
        photo: 'assets/img/michel.png',
        created: new Date()
    },
    {
        id: 3,
        nom: 'Maréchal',
        prenom: 'Denis',
        age: 43,
        profession: ['Policier'],
        photo: 'assets/img/denis.png',
        created: new Date()
    }
];
