//<reference types="cypress" />

describe('testando função soma', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('soma de 3 + 5', () => {
    cy.get('#num1').type('3')
    cy.get('#num2').type('5')
    cy.get('#somar').click()
    cy.get('#resultado').should('have.text', '8')
  })

  it('soma de -1 + 1', () => {
    cy.get('#num1').type('-1')
    cy.get('#num2').type('1')
    cy.get('#somar').click()
    cy.get('#resultado').should('have.text', '0')
  })

  it('soma de 2.5 + 3.7', () => {
    cy.get('#num1').type('2.5')
    cy.get('#num2').type('3.7')
    cy.get('#somar').click()
    cy.get('#resultado').should('have.text', '6.2')
  })

  it('soma de 0.0000000001 + 0.0000000002', () => {
    cy.get('#num1').type('0.0000000001')
    cy.get('#num2').type('0.0000000002')
    cy.get('#somar').click()
    cy.get('#resultado').should('have.text', '3e-10')
  })
})

describe('testando função divisão', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('divisão de 0 / 5', () => {
    cy.get('#num1').type('0')
    cy.get('#num2').type('5')
    cy.get('#dividir').click()
    cy.get('#resultado').should('have.text', '0')
  })

  it('divisão de 80 / 8', () => {
    cy.get('#num1').type('80')
    cy.get('#num2').type('8')
    cy.get('#dividir').click()
    cy.get('#resultado').should('have.text', '10')
  })

  it('divisão de 40 / 22', () => {
    cy.get('#num1').type('40')
    cy.get('#num2').type('22')
    cy.get('#dividir').click()
    cy.get('#resultado').should('have.text', '1.8181818181818181')
  })

  it('divisão de 1 / 0', () => {
    cy.get('#num1').type('1')
    cy.get('#num2').type('0')
    cy.get('#dividir').click()
    cy.get('#resultado').should('have.text', 'Error')
  })
})
