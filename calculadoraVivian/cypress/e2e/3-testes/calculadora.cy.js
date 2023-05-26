//<reference types="cypress" />

describe('testando função soma', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadoraVivian/index.html')
  })

  beforeEach(() => {
    cy.get('#num1').should('not.be.disabled')
  })

  it('soma de 3 + 5', () => {
    cy.get('#num1').type('3')
    cy.get('#num2').type('5')
    cy.get('[value="+"]').click()
    cy.get('#resultado').should('have.text', '8')
  })

  it('soma de -1 + 1', () => {
    cy.get('#num1').type('-1')
    cy.get('#num2').type('1')
    cy.get('[value="+"]').click()
    cy.get('#resultado').should('have.text', '0')
  })

  it('soma de 2.5 + 3.7', () => {
    cy.get('#num1').type('2.5')
    cy.get('#num2').type('3.7')
    cy.get('[value="+"]').click()
    cy.get('#resultado').should('have.text', '6.2')
  })

  it('soma de 0.0000000001 + 0.0000000002', () => {
    cy.get('#num1').type('0.0000000001')
    cy.get('#num2').type('0.0000000002')
    cy.get('[value="+"]').click()
    cy.get('#resultado').should('have.text', '3e-10')
  })
})

describe('testando função divisão', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadoraVivian/index.html')
  })

  beforeEach(() => {
    cy.get('#num1').should('not.be.disabled')
  })

  it('divisão de 0 / 5', () => {
    cy.get('#num1').type('0')
    cy.get('#num2').type('5')
    cy.get('[value="/"]').click()
    cy.get('#resultado').should('have.text', '0')
  })

  it('divisão de 80 / 8', () => {
    cy.get('#num1').type('80')
    cy.get('#num2').type('8')
    cy.get('[value="/"]').click()
    cy.get('#resultado').should('have.text', '10')
  })

  it('divisão de 40 / 22', () => {
    cy.get('#num1').type('40')
    cy.get('#num2').type('22')
    cy.get('[value="/"]').click()
    cy.get('#resultado').should('have.text', '1.8181818181818181')
  })

  it('divisão de 1 / 0', () => {
    cy.get('#num1').type('1')
    cy.get('#num2').type('0')
    cy.get('[value="/"]').click()
    cy.get('#resultado').should('have.text', 'Infinity')
  })
})

describe('testando função exponenciação', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadoraVivian/index.html')
  })

  it('subtração de 3 ^ 0', () => {
    cy.get('#num1').type('3')
    cy.get('#num2').type('0')
    cy.get('[value="^"]').click()
    cy.get('#resultado').should('have.text', '1')
  })

  it('subtração de 25 ^ 2', () => {
    cy.get('#num1').type('25')
    cy.get('#num2').type('2')
    cy.get('[value="^"]').click()
    cy.get('#resultado').should('have.text', '625')
  })

  it('subtração de 6^3', () => {
    cy.get('#num1').type('6')
    cy.get('#num2').type('3')
    cy.get('[value="^"]').click()
    cy.get('#resultado').should('have.text', '216')
  })

  it('subtração de 5 ^ 5', () => {
    cy.get('#num1').type('5')
    cy.get('#num2').type('5')
    cy.get('[value="^"]').click()
    cy.get('#resultado').should('have.text', '3125')
  })

  it('subtração de 2 ^ 2', () => {
    cy.get('#num1').type('2')
    cy.get('#num2').type('2')
    cy.get('[value="^"]').click()
    cy.get('#resultado').should('have.text', '4')
  })
})

describe('testando função subtração', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadoraVivian/index.html')
  })

  it('subtração de 5 - 3', () => {
    cy.get('#num1').type('5')
    cy.get('#num2').type('3')
    cy.get('[value="-"]').click()
    cy.get('#resultado').should('have.text', '2')
  })

  it('subtração de 30 -40', () => {
    cy.get('#num1').type('30')
    cy.get('#num2').type('40')
    cy.get('[value="-"]').click()
    cy.get('#resultado').should('have.text', '-10')
  })

  it('subtração de 6 -6', () => {
    cy.get('#num1').type('6')
    cy.get('#num2').type('6')
    cy.get('[value="-"]').click()
    cy.get('#resultado').should('have.text', '0')
  })

  it('subtração de -150 -10', () => {
    cy.get('#num1').type('-150')
    cy.get('#num2').type('10')
    cy.get('[value="-"]').click()
    cy.get('#resultado').should('have.text', '-160')
  })

  it('subtração de -30 -40', () => {
    cy.get('#num1').type('-30')
    cy.get('#num2').type('40')
    cy.get('[value="-"]').click()
    cy.get('#resultado').should('have.text', '-70')
  })
})

describe('testando função raiz', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadoraVivian/index.html')
  })

  it('raiz de 80', () => {
    cy.get('#num1').type('80')
    cy.get('[value="√"]').click()
    cy.get('#resultado').should('have.text', '8.94')
  })

  it('raiz de 9', () => {
    cy.get('#num1').type('9')
    cy.get('[value="√"]').click()
    cy.get('#resultado').should('have.text', '3.00')
  })

  it('raiz de 20', () => {
    cy.get('#num1').type('20')
    cy.get('[value="√"]').click()
    cy.get('#resultado').should('have.text', '4.47')
  })

  it('raiz de 2000', () => {
    cy.get('#num1').type('2000')
    cy.get('[value="√"]').click()
    cy.get('#resultado').should('have.text', '44.72')
  })

  it('raiz de 169', () => {
    cy.get('#num1').type('169')
    cy.get('[value="√"]').click()
    cy.get('#resultado').should('have.text', '13.00')
  })
})

describe('testando função multiplicação', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadoraVivian/index.html')
  })

  it('multiplicar de 20 * 40', () => {
    cy.get('#num1').type('20')
    cy.get('#num2').type('40')
    cy.get('[value="*"]').click()
    cy.get('#resultado').should('have.text', '800')
  })

  it('multiplicar de 2*(-2)', () => {
    cy.get('#num1').type('2')
    cy.get('#num2').type('-2')
    cy.get('[value="*"]').click()
    cy.get('#resultado').should('have.text', '-4')
  })

  it('multiplicar de 0*40', () => {
    cy.get('#num1').type('0')
    cy.get('#num2').type('40')
    cy.get('[value="*"]').click()
    cy.get('#resultado').should('have.text', '0')
  })

  it('multiplicar de 1*30', () => {
    cy.get('#num1').type('1')
    cy.get('#num2').type('30')
    cy.get('[value="*"]').click()
    cy.get('#resultado').should('have.text', '30')
  })

  it('multiplicar de -30 *40', () => {
    cy.get('#num1').type('-30')
    cy.get('#num2').type('40')
    cy.get('[value="*"]').click()
    cy.get('#resultado').should('have.text', '-1200')
  })
})

describe('testando função número primo', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadoraVivian/index.html')
  })

  it('7 é primo?', () => {
    cy.get('#num1').type('7')
    cy.get('[value="Primo"]').click()
    cy.get('#resultado').should('have.text', 'true')
  })

  it('0 é primo?', () => {
    cy.get('#num1').type('0')
    cy.get('[value="Primo"]').click()
    cy.get('#resultado').should('have.text', 'false')
  })

  it('2 é primo?', () => {
    cy.get('#num1').type('2')
    cy.get('[value="Primo"]').click()
    cy.get('#resultado').should('have.text', 'true')
  })

  it('1 é primo?', () => {
    cy.get('#num1').type('1')
    cy.get('[value="Primo"]').click()
    cy.get('#resultado').should('have.text', 'false')
  })

  it('3 é primo?', () => {
    cy.get('#num1').type('3')
    cy.get('[value="Primo"]').click()
    cy.get('#resultado').should('have.text', 'true')
  })
})
