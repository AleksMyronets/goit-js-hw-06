// Отримуємо список всіх елементів 

const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Total categories: ${categoriesList.length}`);

// Знаходимо заголовки кожного елементу та кількість елементів в категорії 

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName} (items count: ${itemsCount})`);
});