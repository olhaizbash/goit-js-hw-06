const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');


const elements = ingredients.map(element => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('.item');
  ingredientsEl.textContent = element;
  return ingredientsEl;
});
ingredientsList.append(...elements);
console.log(ingredientsList);