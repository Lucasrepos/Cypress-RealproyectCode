import logueaPage from "./POM/PageObjLoguin"


describe('Create a Memo', function () {
    //logueo cuenta admin
    beforeEach(() => {

        cy.visit('/')
        logueaPage.searchUsername('XXXXXXXX@XXXXXXXXX.com')
        logueaPage.searchPassInput('XXXXXXX')

    })
    it('Ceat user type 2', function () {
        cy.wait(1000)
        cy.visit('http://XXXXXXXXXXX:8081/mesa-entrada/notas');
        cy.get('.MuiButton-label').click()
        cy.get(WebElem.remitente).type("lucas MOLINA{downarrow}{ENTER}")
        cy.wait(1000)
        cy.get(WebElem.sector).click()
        cy.get(WebElem.delegacion).click()
        cy.get(WebElem.tipo).click()
        cy.get(WebElem.estado).click()
        cy.get(WebElem.selecEstado).click()
        cy.get(WebElem.selecTipo).click()
        cy.get(WebElem.selectDelegacion).click()
        cy.get(WebElem.selectRemitente).click()
        cy.get(WebElem.resumen).type('    bla bla bla')
        cy.get(WebElem.date).type('1991-12-05')
        cy.get(WebElem.time).type('20:00')
        cy.get(WebElem.actuacion).click()
        cy.get(WebElem.apellido).click()
        cy.get(WebElem.saveBtn).click()
        cy.get(WebElem.confirmBtn).click()
        cy.get(WebElem.messaje).contains('Nota Creada Exitosamente')
        cy.get(WebElem.codemesaje).contains('Código')


    })
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
})
