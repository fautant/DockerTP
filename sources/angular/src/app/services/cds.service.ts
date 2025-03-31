import { Injectable } from '@angular/core';
import { CD } from '../models/cd.model';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() {}
  getCDs(): CD[] {

    return [
    {
      id: 1,
      title: 'The DarkSide of the Moon',
      author: 'Pink Floyd',
      price: 10,
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Dark_Side_of_the_Moon_Cover.svg/220px-The_Dark_Side_of_the_Moon_Cover.svg.png',
      dateDeSortie: new Date(1973, 3, 1),
      quantite: 1
    },
    {
      id: 2,
      title: 'Pulse',
      author: 'Pink Floyd',
      price: 100,
      thumbnail: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
      dateDeSortie: new Date(1994, 4, 11),
      quantite: 2,
      onsale: true
    },
    {
      id: 3,
      title: 'Pulse!',
      author: 'Pink Floyd',
      price: 100,
      thumbnail: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
      dateDeSortie: new Date(1984, 6, 20),
      quantite: 0
    }
    ];
  }
  getCDById(id: number) : CD {
    const cd = this.getCDs().find(cd => cd.id === id);
    if (cd) {
      return cd;
    }
    else {
      throw new Error('CD not trouvé');
    }
  }
}
