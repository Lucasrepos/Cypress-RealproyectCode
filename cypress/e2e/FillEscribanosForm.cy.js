//Obejtivo: Crear Usuarios de tipo "Particulares" - Loguea con C. Admin. Y completa el formulario, generando nombres e emails aleatoreos.
import { getNombre, getApellido, generaDNI } from "./POM/Azar.js"
import logueaPage from "./POM/PageObjLoguin"
import escribanosForm from "./POM/EscribanosPOM.cy"

describe('Creador de Escribanos', function () {
    //logueo cuenta admin
    beforeEach(() => {

        cy.visit('/')
        logueaPage.searchUsername('XXXXXXXX@XXXXXXX.com')
        logueaPage.searchPassInput('XXXXXXXXX')

    })
    const Generate = {
        nombre : getNombre(),
        apellido: getApellido(),
        DNI : generaDNI(8),
        CUIT : generaDNI(11),
    }
    const userInfo = {
        city : 'Rosistoncio',
        date : '1991-05-31',
        streetName : 'Alberdi',
        nro: '244',
        manzana: 'manzana',
        piso: '11',
        depto: 'a',
        observaciones: 'observaciones',
        postalCode: '3500',
        movile:'3624623914',
        phone:'6365623914',
        fakeemail: 'email@email.com',
        acta: "002",
        ExpedidoPor: 'UNNE',
        fechaEntrega: '2022-10-09',

    }
    it('Fill and Subbmit Escribanos Form', function () {
        cy.wait(1000)
        cy.visit('/afiliados/crear-escribano');
        
        escribanosForm.personalData(Generate.nombre,Generate.apellido , 
        Generate.DNI, Generate.CUIT, userInfo.city, userInfo.date)

        escribanosForm.contactData(userInfo.streetName, userInfo.nro, userInfo.manzana, userInfo.piso, 
        userInfo.depto, userInfo.observaciones, userInfo.postalCode, userInfo.movile, userInfo.phone, 
        userInfo.fakeemail)

        escribanosForm.profesionalData(userInfo.acta,userInfo.ExpedidoPor,userInfo.date,userInfo.date,
        userInfo.fechaEntrega)

        escribanosForm.profesionalContactData(userInfo.fechaEntrega, userInfo.streetName, userInfo.nro,
        userInfo.movile, userInfo.fakeemail)

        cy.wait(1000)
        cy.get('.MuiTypography-h5').contains(Generate.nombre).should('be.visible')
        cy.get('.MuiTypography-h5').contains('nuevo').should('be.visible')

    
    })
})

