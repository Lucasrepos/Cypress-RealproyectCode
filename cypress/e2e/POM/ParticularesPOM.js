class particulares {

    constructor() {
        this.btn = '.MuiButton-label';
        this.nameInput = '#Nombre';
        this.lastnameInput = '#Apellido';
        this.dniInput = '#DNI';
        this.cuitInput = '[style="min-height: 20vh; padding: 1rem;"] > :nth-child(1) > :nth-child(4)';
        this.razonsocualInput = '[style="min-height: 20vh; padding: 1rem;"] > :nth-child(1) > :nth-child(5)';
        this.emailIput = '#Email';
        this.telephone = '#Teléfono';
        this.mobile = '#Celular'
        this.provinceDropdown = ':nth-child(2) > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root';
        this.selectChaco = '[data-value="Chaco"]';
        this.cityDropdown = ':nth-child(2) > :nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root';
        this.selectCity = '[data-value="Bermejo"]';
        this.selectDepto = ':nth-child(2) > :nth-child(2) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root'
        this.dropdownDepto = '[data-value="Isla del Cerrito"]';
        this.streetName = ':nth-child(2) > :nth-child(2) > :nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #Calle';
        this.streetNumber = ':nth-child(2) > :nth-child(2) > :nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > #Número';
        this.postalCode = ':nth-child(2) > :nth-child(2) > :nth-child(6)';
        this.observaciones = ':nth-child(2) > :nth-child(2) > :nth-child(7)';
        this.provincia = ':nth-child(3) > :nth-child(2) > :nth-child(1) > .MuiFormControl-root';
        this.selectProvincia = '[data-value="Chaco"]';
        this.city = ':nth-child(3) > :nth-child(2) > :nth-child(2) > .MuiFormControl-root';
        this.selectCity = '[data-value="Bermejo"]';
        this.depto = ':nth-child(3) > :nth-child(2) > :nth-child(3) > .MuiFormControl-root';
        this.selectDepto = '[data-value="Las Palmas"]'
        this.streetName2 = ':nth-child(3) > :nth-child(2) > :nth-child(4)';
        this.streetNumber2 = ':nth-child(3) > :nth-child(2) > :nth-child(5)';
        this.postalCode2 = ':nth-child(3) > :nth-child(2) > :nth-child(6)';
        this.observacines2 = ':nth-child(3) > :nth-child(2) > :nth-child(7)';
        this.saveBtn = '.MuiButton-contained > .MuiButton-label';
        this.selectCity = ':nth-child(2) > :nth-child(2) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root';
    }


        particularesData = (nombre, apellido, dni, cuit, razonSocial, email, telefono, celular, calle, altura, codigoPostal, observaciones,) => {
            cy.get(this.btn).click()
            cy.get(this.nameInput).type(nombre)
            cy.get(this.lastnameInput).type(apellido)
            cy.get(this.dniInput).type(dni)
            cy.get(this.cuitInput).type(cuit) 
            cy.get(this.razonsocualInput).type(razonSocial)
            cy.get(this.emailIput).type(email) 
            cy.get(this.telephone).type(telefono)
            cy.get(this.mobile).type(celular)
            cy.get(this.provinceDropdown).click()
            cy.get(this.selectChaco).click()
            cy.get(this.cityDropdown).click()
            cy.get(this.selectCity).click()
            cy.get(this.selectCity).click()
            cy.get(this.selectDepto).click()
            cy.get(this.dropdownDepto).click()
            cy.get(this.streetName).type(calle)
            cy.get(this.streetNumber).type(altura)
            cy.get(this.postalCode).type(codigoPostal)
            cy.get(this.observaciones).type(observaciones)
            cy.get(this.provincia).click()
            cy.get(this.selectProvincia).click()
            cy.get(this.city).click()
            cy.wait(500)
            cy.get(this.selectCity).click()
            cy.get(this.depto).click()
            cy.get(this.selectDepto).click()
            cy.get(this.streetName2).type(calle)
            cy.get(this.streetNumber2).type(altura)
            cy.get(this.postalCode2).type(codigoPostal)
            cy.get(this.observacines2).type(observaciones)
            cy.get(this.saveBtn).click()
        }
    }

    export default new particulares();