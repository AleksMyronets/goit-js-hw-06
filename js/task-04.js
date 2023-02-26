// Створюємо змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуємо її значення 0

let counterValue = 0;
const valueSpan = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

// Додаємо слухачів кліків до кнопок, всередині яких збільшується або зменшується значення лічильника

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
  });

  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
  });