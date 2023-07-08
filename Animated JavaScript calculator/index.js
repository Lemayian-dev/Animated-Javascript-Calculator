let currentExpression = '';

function updateDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  const expression = document.getElementById('display').value;
  const result = eval(expression);
  document.getElementById('display').value = result;
  currentExpression = '';
}

function clearDisplay() {
  document.getElementById('display').value = '';
  currentExpression = '';
}

function performOperation(operator) {
  currentExpression += operator;
  updateDisplay(operator);
}

