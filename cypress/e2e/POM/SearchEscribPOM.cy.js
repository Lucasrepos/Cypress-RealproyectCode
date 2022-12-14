class listEscrib {
    constructor() {
        this.url = "http://xxxxxxxxxxxxx:8081/afiliados";
    }

    open() {
        cy.visit(this.url);
        cy.wait(1000);
    }

    search(Name) {
        cy.wait(1000);
        cy.get('.MuiInputBase-input').type(Name)
    }
    checkName(checkName){
        cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1)')
        .contains(checkName).should('be.visible')
    }

    checkData(street){
        cy.get(':nth-child(3) > #panel1a-header > .MuiAccordionSummary-content').click()
        cy.get('[style="max-height: 50vh; overflow: auto; padding: 1rem;"]').contains(street).should('be.visible')

    }
}

export default new listEscrib ();