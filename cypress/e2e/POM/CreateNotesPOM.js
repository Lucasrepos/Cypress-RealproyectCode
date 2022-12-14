class CreateNote {
    constructor() {
        this.url = "http://xxxxxxxxxxxxx:8081/mesa-entrada/notas";
    }

    open() {
        cy.visit(this.url);
        cy.wait(1000);
    }

    remintenteName(Name) {
        cy.get('.MuiButton-label').click()
        cy.get(WebElem.remitente).type(Name, "{downarrow}{ENTER}")
    }
    SelectSector() {
        cy.get(WebElem.sector).click()
    } 
    ClickOnDelegacion() {
        cy.get(WebElem.delegacion).click()
    } 
    Tipo() {
        cy.get(WebElem.tipo).click()
    } 
    selectEstado() {
        cy.get(WebElem.selecEstado).click()
    } 
    selecTipo() {
        cy.get(WebElem.selecTipo).click()
    } 
    selectDelegacion() {
        cy.get(WebElem.selectDelegacion).click()
    }
    selectRemitente() {
        cy.get(WebElem.selectRemitente).click()
    }

    
    date(observacionesText) {
        cy.get(WebElem.resumen).type(observacionesText)
    }
    SetTime(time) {
        cy.get(WebElem.time).type(time)
    }
    SetDate(date) {
        cy.get(WebElem.date).type(date)
    }
    SelectActuacion() {
        cy.get(WebElem.actuacion).click()
    }
    SelectApellido() {
        cy.get(WebElem.apellido).click()
    }
    subbmit() {
        cy.get(WebElem.saveBtn).click()
        cy.get(WebElem.confirmBtn).click()
    }

    assert(assertMessage1,assertMessage2) {
        cy.get(WebElem.messaje).contains(assertMessage1)
        cy.get(WebElem.codemesaje).contains(assertMessage2)
    }
}




const WebElem = {
    remitente: '.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root',
    sector: ':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root',
    delegacion: '.MuiPaper-root > .MuiList-root > [tabindex="0"]',
    tipo: ':nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root',
    estado: '.MuiPaper-root > .MuiList-root > [tabindex="0"]',
    selecEstado: ':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root',
    selecTipo: '.MuiPaper-root > .MuiList-root > [tabindex="0"]',
    selectDelegacion: ':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root',
    selectRemitente: '.MuiPaper-root > .MuiList-root > [tabindex="0"]',
    resumen: '[style="background-color: rgb(255, 255, 255); padding: 1rem; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;"] > :nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root',
    date: ':nth-child(2) > :nth-child(1) > .MuiFormControl-root',
    time: '[style="background-color: rgb(255, 255, 255); padding: 1rem; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;"] > :nth-child(2) > :nth-child(2)',
    actuacion: '.MuiGrid-root > .MuiButton-contained',
    apellido: ':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root',
    saveBtn: '.MuiPaper-root > .MuiList-root > [tabindex="0"]',
    confirmBtn: '.MuiGrid-root > .MuiButton-contained',
    messaje: '.MuiSnackbar-root > .MuiPaper-root',
    codemesaje: '.MuiTableCell-root.MuiTableCell-head.MuiTableCell-sizeSmall'

}
export default new CreateNote();

