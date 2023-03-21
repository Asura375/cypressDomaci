/// <reference types="Cypress" />

describe ("Login page", () =>{

    it ("Visit login page", () => {
cy.visit("https://gallery-app.vivifyideas.com");
    });

    it('Successful login', () => {
        cy.visit("https://gallery-app.vivifyideas.com/login");
        cy.get('input[id="email"]').type('zilijic@gmail.com');    
        cy.get('input[id="password"]').type('Joobae95');
        cy.get('button[type="submit"]').click();
    }); 

});