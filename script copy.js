const title = document.getElementById("title");
const message = document.getElementById("message");
const userInput = document.getElementById("userInput");
const card = document.getElementById("card");

document.getElementById("textBtn").addEventListener("click", changeText);
document.getElementById("colorBtn").addEventListener("click", changeColor);
document.getElementById("checkBtn").addEventListener("click", checkInput);

// Изменить текст
function changeText() {
  const text = userInput.value.trim();

  if (text === "") {
    message.textContent = "Пусто. Введи текст.";
  } else {
    title.textContent = text;
    message.textContent = "Текст обновлён.";
  }
}

// Случайный цвет
function randomColor() {
  return `rgb(${rand()}, ${rand()}, ${rand()})`;
}
function rand() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  card.style.background = randomColor();
}

// Проверка условия
function checkInput() {
  const text = userInput.value.trim();

  if (text.length > 10) {
    message.textContent = "Текст длинный.";
  } else if (text.length > 0) {
    message.textContent = "Текст короткий.";
  } else {
    message.textContent = "Ты даже не попробовал.";
  }
}