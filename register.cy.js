/// <reference types="Cypress" />

describe ("Register page", () =>{

    it ("Visit register page", () => {
cy.visit("https://gallery-app.vivifyideas.com");
    });

    it('Successful register', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('Zoran');    
        cy.get('input[id="last-name"]').type('Ilijic');
        cy.get('input[id="email"]').type('zoran1234cypress.test@gmail.com');
        cy.get('input[id="password"]').type('cypress1234');
        cy.get('input[id="password-confirmation"]').type('cypress1234');
        cy.get('.form-check-input').click();        //cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();       
    }); 

    it('Negative case - Registration with password-confirmation field empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('Zoran');    
        cy.get('input[id="last-name"]').type('Ilijic');
        cy.get('input[id="email"]').type('zoran1234cypress.test@gmail.com');
        cy.get('input[id="password"]').type('cypress1234');
        cy.get('input[id="password-confirmation"]').type('');
        cy.get('.form-check-input').click();
        cy.get('button[type="submit"]').click();
    }); 
    it('Negative case - Registration with different password and password-confirmation', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('Zoran');    
        cy.get('input[id="last-name"]').type('Ilijic');
        cy.get('input[id="email"]').type('zoran1234cypress.test@gmail.com');
        cy.get('input[id="password"]').type('cypress1234');
        cy.get('input[id="password-confirmation"]').type('1234cypress1234');
        cy.get('.form-check-input').click();
        cy.get('button[type="submit"]').click();
    }); 
    it('Negative case - Registration with leaving all fields empty', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('');    
        cy.get('input[id="last-name"]').type('');
        cy.get('input[id="email"]').type('');
        cy.get('input[id="password"]').type('');
        cy.get('input[id="password-confirmation"]').type('');
        cy.get('.form-check-input').click();
        cy.get('button[type="submit"]').click();
    }); 
    it('Negative case - Registration with empty last-name field', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('Zoran');    
        cy.get('input[id="last-name"]').type('');
        cy.get('input[id="email"]').type('zoran1234cypress.test@gmail.com');
        cy.get('input[id="password"]').type('cypress1234');
        cy.get('input[id="password-confirmation"]').type('cypress1234');
        cy.get('.form-check-input').click();
        cy.get('button[type="submit"]').click();
    }); 
    it('Negative case - Registration with empty first-name field', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('');    
        cy.get('input[id="last-name"]').type('Ilijic');
        cy.get('input[id="email"]').type('zoran1234cypress.test@gmail.com');
        cy.get('input[id="password"]').type('cypress1234');
        cy.get('input[id="password-confirmation"]').type('cypress1234');
        cy.get('.form-check-input').click();
        cy.get('button[type="submit"]').click();
    }); 
    it('Negative case - Registration with unchecked box', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('Zoran');    
        cy.get('input[id="last-name"]').type('Ilijic');
        cy.get('input[id="email"]').type('zoran1234cypress.test@gmail.com');
        cy.get('input[id="password"]').type('cypress1234');
        cy.get('input[id="password-confirmation"]').type('cypress1234');
        cy.get('button[type="submit"]').click();
    }); 
});
