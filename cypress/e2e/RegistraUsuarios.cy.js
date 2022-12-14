import { getNombre, getApellido } from "./POM/Azar.js"
import RegistrationPage from "./POM/CreaUsuariosPOM.cy"

describe('Creador Usuario', function () {

    beforeEach(() => {

    })
    const UserInfo = {
    email : 'fake@email.com',
    password : 'Passlira1$',
    nombre: getNombre(),
    apellido: getApellido()
    }
    it('Create a Simple User', function () {
        RegistrationPage.open()
        RegistrationPage.enterFirstName(UserInfo.nombre)
        RegistrationPage.enterLastName(UserInfo.apellido)
        RegistrationPage.enterEmail(UserInfo.email)
        RegistrationPage.enterEmployNumber(13245)
        RegistrationPage.enterPassword(UserInfo.password)
        RegistrationPage.enterConfirmPassword(UserInfo.password)
        RegistrationPage.submitForm()
        RegistrationPage.verifySuccessMessage

    })
})
