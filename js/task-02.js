const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Отримуємо список ingredients

const ingredientsList = document.querySelector('#ingredients');

// Створюємо масив елементів li для кожного елемента масиву ingredients

const ingredientsItems = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

// Додаємо всі елементи li за одну операцію у список ingredients

ingredientsList.append(...ingredientsItems);