class RegistrationPage {
    constructor() {
        this.url = "xxxxxxxxxx/auth/register";
    }

    open() {
        cy.visit(this.url);
        cy.wait(1000);
    }

    enterFirstName(firstName) {
        cy.get('.MuiFormControl-root:nth-child(1) .MuiInputBase-input').type(firstName);
    }

    enterLastName(lastName) {
        cy.get('.Mui-focused > .MuiInputBase-input').click();
        cy.get('.MuiFormControl-root:nth-child(2) .MuiInputBase-input').type(lastName);
    }

    enterEmail(email) {
        cy.get('.MuiFormControl-root:nth-child(3) .MuiInputBase-input').type(email);
    }

    enterEmployNumber(number) {
        cy.get('.MuiFormControl-root:nth-child(4) .MuiInputBase-input').type(number);
    }


    enterPassword(password) {
        cy.get('.MuiFormControl-root:nth-child(4) .MuiInputBase-input').type(password);
    }

    enterConfirmPassword(password) {
        cy.get('.MuiFormControl-root:nth-child(5) .MuiInputBase-input').type(password);
        cy.get('.MuiFormControl-root:nth-child(6) .MuiInputBase-input').type(password);
    }

    submitForm() {
        cy.get('.MuiFormControl-root:nth-child(6) .MuiButtonBase-root').click();
        cy.get('.MuiButton-contained > .MuiButton-label').click();
    }

    verifySuccessMessage() {
        cy.get('[style="color: rgb(0, 0, 0); font-size: 1.4rem; font-weight: normal; margin-top: 1rem;"]')
            .contains('matico').should('be.visible')
        cy.get('[style="color: rgb(0, 0, 0); font-size: 1.4rem; font-weight: normal; margin-top: 1rem;"]')
            .contains('exitoso').should('be.visible')

    }
}

export default new RegistrationPage();