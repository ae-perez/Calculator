function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num);
}

function subtract(...numbers) {
  return numbers.reduce((diff, num) => diff - num);
}

function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num);
}

function divide(...numbers) {
  return numbers.reduce((quotiant, num) => quotiant / num);
}

function operate() {
  const btnPressed = document.getElementsByClassName('calculator-button');
  const screen = document.getElementById('screen');
  let calculatorScrn = '';

  for (let i = 0; i < btnPressed.length; i++) {
    btnPressed[i].addEventListener('click', function (e) {
      if (btnPressed[i].innerText != '=' && btnPressed[i].innerText != 'CL') {
        calculatorScrn += btnPressed[i].innerText;
        screen.value = calculatorScrn;
      } else if (btnPressed[i].innerText == '=') {
        let nums = calculatorScrn.split(/[\+\-\*\/]/);
        let operator = calculatorScrn.match(/[\+\-\*\/]/g);
        let result = 0;

        nums = nums.map((num) => Number(num));

        switch (operator[0]) {
          case '+':
            result = add(...nums);
            break;
          case '-':
            result = subtract(...nums);
            break;
          case '*':
            result = multiply(...nums);
            break;
          case '/':
            result = divide(...nums);
            break;
        }
        calculatorScrn = result;
        screen.value = calculatorScrn;
      } else if (btnPressed[i].innerText == 'CL') {
        calculatorScrn = 0;
        screen.value = calculatorScrn;
      }
    });
  }
}

operate();
