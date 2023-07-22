/**
 * START: Follow the instructions below.
 */

// Prevent the array from being modified.
// Use the generic interface type `ReadonlyArray`: ReadonlyArray<type>
// This will cause a type error. Remove the code that now has a type error.

const languages: ReadonlyArray<string> = [
  "Mongolian",
  "French",
  "Basque",
  "Thai",
];

// languages[2] = "Hausa"; Errore perchè l'array è di sola lettura, quindi non possiamo modificare la stringa contenuta all'indice 2

console.log(languages);

// Prevent the array from being modified.
// Use the readonly modifier and the array literal type syntax: readonly type[]
// This will cause a type error. Remove the code that now has a type error.

const currencies: readonly string[] = [
  "NZD",
  "THB",
  "NGN",
  "EUR",
  "COP",
  "INR",
];

// currencies.reverse(); Errore perchè l'array è di sola lettura

console.log(currencies);

// ----

export {};
