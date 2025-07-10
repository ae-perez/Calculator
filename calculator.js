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
  let justCalculated = false;

  for (let i = 0; i < btnPressed.length; i++) {
    btnPressed[i].addEventListener('click', (e) => {
      const clickedBtnText = e.target.innerText;

      if (clickedBtnText === 'CL') {
        console.log('CL WAS PRESSED');
        justCalculated = false;
        calculatorScrn = '';
        screen.value = '0';
        return; // stop here after clearing
      }

      if (justCalculated) {
        if (/[\+\-\*\/]/.test(clickedBtnText)) {
          justCalculated = false;
        } else {
          return;
        }
      }

      if (clickedBtnText != '=') {
        calculatorScrn += clickedBtnText;
        screen.value = calculatorScrn;
      } else {
        let nums = calculatorScrn.split(/[\+\-\*\/]/);
        let operator = calculatorScrn.match(/[\+\-\*\/]/g);
        let result = 0;

        justCalculated = true;
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
      }
    });
  }
}

operate();
