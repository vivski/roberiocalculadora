// RAIZ QUADRADA

function raizQuadrada() {
  const num1 = parseFloat(document.getElementById('num1').value)

  let raiz = Math.sqrt(num1).toFixed(2)

  document.getElementById('resultado').textContent = raiz
}

// EXPONENCIAÇÃO

function exponenciacao() {
  const num1 = parseInt(document.getElementById('num1').value)
  const num2 = parseInt(document.getElementById('num2').value)

  let resultado = Math.pow(num1, num2)
  document.getElementById('resultado').innerHTML = resultado
}

// NÚMERO PAR - IMPAR

function imparPar() {
  const num1 = parseInt(document.getElementById('num1').value)

  if (num1 % 2 === 0) {
    document.getElementById('resultado').innerHTML = num1 + ' É par'
  } else {
    document.getElementById('resultado').innerHTML = num1 + ' É ímpar'
  }
}

// NÚMERO PRIMO

function numeroPrimo() {
  const num1 = parseInt(document.getElementById('num1').value)

  let divisores = 0
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      divisores++
    }
  }
  if (divisores === 2) {
    document.getElementById('resultado').innerHTML = num1 + ' É Primo'
  } else {
    document.getElementById('resultado').innerHTML = num1 + ' Não é primo'
  }
}

// FATORIAL

function fatorial() {
  const num1 = parseInt(document.getElementById('num1').value)

  let calcular = 1

  for (let i = 1; i <= num1; i++) {
    calcular *= i
  }

  document.getElementById('resultado').innerHTML = calcular
}

//ADIÇAO

function adicao() {
  const num1 = parseFloat(document.getElementById('num1').value)
  const num2 = parseFloat(document.getElementById('num2').value)

  document.getElementById('resultado').textContent = num1 + num2
  // document.querySelector('.numero').value = num1 + num2;
  //  document.calc.display.value = calcular;
}

// SUBTRAÇÃO

function subtracao() {
  const num1 = parseInt(document.getElementById('num1').value)
  const num2 = parseInt(document.getElementById('num2').value)

  document.getElementById('resultado').innerHTML = num1 - num2
}

//MULTIPLICAÇÃO

function multiplicacao() {
  const num1 = parseInt(document.getElementById('num1').value)
  const num2 = parseInt(document.getElementById('num2').value)

  document.getElementById('resultado').innerHTML = num1 * num2
}

//DIVISÃO

function divisao() {
  const num1 = parseInt(document.getElementById('num1').value)
  const num2 = parseInt(document.getElementById('num2').value)

  document.getElementById('resultado').innerHTML = num1 / num2
}

//função clear

function clear() {
  document.getElementById('num1').value = ''
  document.getElementById('num2').value = ''
  document.getElementById('resultado').value = ''
}
