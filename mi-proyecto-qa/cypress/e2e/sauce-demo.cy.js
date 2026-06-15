describe('Flujo de compra SauceDemo', () => {
  it('Debería completar la compra exitosamente', () => {
    // 1. Visitar la página
    cy.visit('https://www.saucedemo.com/');

    // 2. Login
    cy.get('[data-test="username"]')
    .type('standard_user');

    cy.get('[data-test="password"]')
    .type('secret_sauce');

    cy.get('[data-test="login-button"]')
    .click();

    // 3. Agregar dos productos al carro
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    .click();

    // 4. Visualizar el carro y completar checkout
    cy.get('.shopping_cart_link')
    .click();

    cy.get('[data-test="checkout"]')
    .click();

    // 5. Completar formulario de compra
    cy.get('[data-test="firstName"]')
    .type('QA');

    cy.get('[data-test="lastName"]')
    .type('Tester');

    cy.get('[data-test="postalCode"]')
    .type('12345');

    cy.get('[data-test="continue"]')
    .click();

    cy.get('[data-test="finish"]')
    .click();

    // 6. Finalizar la compra y validar mensaje
    cy.get('.complete-header')
    .should('contain', 
            'Thank you for your order!');
  });
});