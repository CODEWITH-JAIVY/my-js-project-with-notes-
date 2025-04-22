// app.js
import greet from './Massge.js';
import { add, subtract } from './Math.js';

const output = document.getElementById('output');
const greetBtn = document.getElementById('greetBtn');
const calcBtn = document.getElementById('calcBtn');

greetBtn.addEventListener('click', () => {
  const message = greet("Jaivy");
  output.textContent = message;
});

calcBtn.addEventListener('click', () => {
  const result = add(10, 5) + " | " + subtract(10, 5);
  output.textContent = `Add: 10 + 5 = ${add(10, 5)}, Subtract: 10 - 5 = ${subtract(10, 5)}`;
});
