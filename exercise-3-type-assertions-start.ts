/**
 * START: Follow the instructions below.
 */

type Population = number;

function getPopulation(): Population {
  return 69_950_850;
}

// Add a type assertion after the call to `getPopulation()`.
// Hint: What's the actual type of the value returned by `getPopulation()`?

const population = getPopulation();

// Now you've added a type assertion, there's a type error in the code below.
// Remove the code that is incorrect.

// console.log(population.toUpperCase()); Rimosso perchè contiene una funzione per le stringhe e il valore restituito dalla funzione è un numero

console.log(population * 2);

// ----

export {};
