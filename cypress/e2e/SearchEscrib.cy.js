import logueaPage from "./POM/PageObjLoguin"
import listEscrib from "./POM/SearchEscribPOM.cy.js"


describe('leer un escribano en particular', function () {
    beforeEach(() => {

        cy.visit('/')
        logueaPage.searchUsername('xxxxxxx@xxxxxxx')
        logueaPage.searchPassInput('xxxxxxxxx')
        cy.wait(1000)
        cy.visit('/afiliados')
    })
    const dataTest = {
        nombre : 'Campos',
        street : 'Chile'
    }


    it('Search and check Escribanos at the Escribanos List', function () {
        listEscrib.open
        listEscrib.search(dataTest.nombre)
        listEscrib.checkName(dataTest.nombre)
        listEscrib.checkData(dataTest.street)
                
    })
})