//Obejtivo: Crear Usuarios de tipo "Particulares" - Loguea con C. Admin. Y completa el formulario, generando nombres e emails aleatoreos.
import { getNombre, getApellido, generaDNI } from "./POM/Azar.js"
import particulares from "./ParticularesPOM.js"
import logueaPage from "./POM/PageObjLoguin"


describe('Creador de Particulares', function () {

    beforeEach(() => {

        cy.visit('/')
        logueaPage.searchUsername('XXXXXXX@XXXXXXX.com')
        logueaPage.searchPassInput('XXXXXXX')

    })

    afterEach(() => {
       
    })
    const Generate = {
        nombre : getNombre(),
        apellido: getApellido(),
        DNI : generaDNI(8),
        CUIT : generaDNI(11),
    }
    const userInfo = {
        razonSocial : 'Coop LTDA',
        Email : `auto${new Date().getTime()}@matico.com`,
        telefono : '3624623914',
        celular : '3624623916',
        calle : 'Siempre Viva',
        altura : '1232',
        codigoPostal : '3500',
        observaciones : 'Campo de observaciones lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum '

    }
    it('crea un particular', function () {
        cy.wait(1000)
        cy.visit('http://190.7.20.153:8081/mesa-entrada/particulares')

        particulares.particularesData(Generate.nombre, Generate.apellido, Generate.DNI, Generate.CUIT,userInfo.razonSocial, 
        userInfo.Email, userInfo.telefono, userInfo.celular, userInfo.calle, userInfo.altura, userInfo.codigoPostal, 
        userInfo.observaciones)
    })
})


