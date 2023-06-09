/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = () => {
      return this.budget > 1e8 ? true : false;
    };
  }
}
// Example

const lostInTranslation = new Movie(
  'Lost in translation',
  'Sofia Coppola',
  4000000
);
console.log(lostInTranslation);
console.log(lostInTranslation.wasExpensive());
