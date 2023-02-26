// Отримуємо список validation-input

const validationInput = document.querySelector("#validation-input");

// Задаємо умову щодо кількості введених символів, тобто ккщо введена правильна кількість символів (data-length),
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.

validationInput.addEventListener("blur", () => {

    validationInput.classList.toggle("valid", validationInput.value.length >= 6);
    validationInput.classList.toggle("invalid", validationInput.value.length <= 5)
});