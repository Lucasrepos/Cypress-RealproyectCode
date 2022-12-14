import logueaPage from "./POM/PageObjLoguin"
import CreateNote from "./POM/CreateNotesPOM"

describe('Create a Memo', function () {
    //
    beforeEach(() => {

        cy.visit('/')
        logueaPage.searchUsername('XXXXXXXX@XXXXXXXXX.com')
        logueaPage.searchPassInput('XXXXXXX')
      
    })
    it('Create Notes', function () {
        CreateNote.open
        CreateNote.remintenteName(dataTest.Name)
        CreateNote.SelectSector()
        CreateNote.ClickOnDelegacion()
        CreateNote.Tipo()
        CreateNote.selectEstado()
        CreateNote.selecTipo()
        CreateNote.selectDelegacion()
        CreateNote.selectRemitente()
        CreateNote.date(dataTest.observacionesText)
        CreateNote.SetTime(dataTest.Time)
        CreateNote.SetDate(dataTest.Date)
        CreateNote.SelectActuacion()
        CreateNote.SelectApellido
        CreateNote.subbmit
        CreateNote.assert(dataTest.Message1, dataTest.Message2)


    })
    const dataTest = {
        Message1: 'Nota Creada Exitosamente',
        Message2: 'Código',
        Time: '20:00',
        Date: '1991-05-31',
        Name: 'Molina',
        observacionesText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    }
})

