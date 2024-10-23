// Trouver le Produit le Plus Cher

// Objectif :
// Tu as un tableau d'objets représentant des produits et leurs prix. Utilise la déstructuration et les méthodes de tableaux pour trouver le produit le plus cher et afficher ses informations.

// Instructions :
// Crée un tableau products qui contient des objets représentant chaque produit, avec les propriétés name et price.
// Utilise la méthode reduce() pour parcourir le tableau et déterminer le produit le plus cher.
// Affiche le nom et le prix du produit le plus cher.

const products = [
  { name: "Produit A", price: 100 },
  { name: "Produit B", price: 300 },
  { name: "Produit C", price: 200 },
  { name: "Produit D", price: 400 },
];

const { name, price } = products;

const max = products.reduce(function (accumulator, currentValue) {
  return Math.max(accumulator, currentValue);
});

console.log(max);
// Trouver le produit le plus cher avec reduce
console.log(
  `Le produit le plus cher est : ${products.name} au prix de ${products.price} €`
);

// Résultat attendu :
// Le produit le plus cher est : Produit D au prix de 400 €
