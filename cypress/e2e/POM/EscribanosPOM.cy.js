class escribanosForm {

    constructor() {
        this.firstname = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(1) > :nth-child(1)';
        this.lastName = '[style="max-height: 50vh; overflow: auto;"] > :nth-child(1) > :nth-child(2)';
        this.DNInumber = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(2) > :nth-child(1)';
        this.PickDNI = '[data-value="DNI"]';
        this.SelectDNI = ':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root';
        this.DNI = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(2) > :nth-child(2) > .MuiFormControl-root';
        this.CUIT = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(3) > :nth-child(1)';
        this.City = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(3) > :nth-child(2)';
        this.Date = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(4) > :nth-child(1)';
        this.EstadoCivil = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(5) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root';
        this.Single = '[data-value="SOL"]';
        this.btnNext = '.MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss34';
        this.SingleCheck = ':nth-child(2) > :nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss35';
        this.btnSave = ':nth-child(7) > .MuiGrid-grid-xs-12 > .MuiButtonBase-root > .MuiButton-label';
        this.uploadFile = '[name="frenteDni"]';
        this.uploadFile2 = '[name="dorsoDni"]';
        this.btnContinue = '#button-next > .MuiButton-label';
        this.btnext3 = '.MuiGrid-justify-content-xs-space-between > .MuiButtonBase-root > .MuiButton-label';
        this.btnext4 = ':nth-child(3) > #panel1a-header > .MuiButtonBase-root';
        this.streetNumber = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(2) > :nth-child(1) > .MuiFormControl-root';
        this.streetName = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(3) > .MuiGrid-container';
        this.manzanaName = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(1) > .MuiGrid-root';
        this.DptoLetter = '[style="max-height: 50vh; overflow: auto;"] > :nth-child(2) > :nth-child(3)';
        this.observacionesField = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(4) > .MuiGrid-root';
        this.Province = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(5) > :nth-child(1)';
        this.Departament = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(5) > :nth-child(2)';
        this.localidad = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(6) > :nth-child(1)';
        this.localBTN = '#menu- > .MuiPaper-root > .MuiList-root > [tabindex="-1"]';
        this.postalCode = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(6) > :nth-child(2)';
        this.mobileNumber = '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > form > [style="max-height: 50vh; overflow: auto;"] > :nth-child(7) > :nth-child(1)';
        this.phone = '[style="max-height: 50vh; overflow: auto;"] > :nth-child(7) > :nth-child(2)';
        this.fakemail = ':nth-child(8) > .MuiGrid-root';
        this.savebtn = '[style="max-height: 50vh; overflow: auto;"] > .MuiGrid-justify-content-xs-flex-end > .MuiButtonBase-root';
        this.nextbtn = '.MuiGrid-grid-lg-9 > :nth-child(1)';
        this.acta = '.MuiGrid-grid-lg-9 > :nth-child(2)';
        this.entidad = '.MuiGrid-grid-lg-9 > :nth-child(4)';
        this.dateEtrega = '.MuiGrid-grid-lg-9 > :nth-child(5)';
        this.dataRecepcion = '.MuiGrid-grid-lg-9 > :nth-child(3)';
        this.dateEntregabtn = '.MuiGrid-direction-xs-column > .MuiButton-contained > .MuiButton-label';
        this.dateEntragaInput = 'body > div:nth-child(7) > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-direction-xs-column.MuiGrid-align-items-xs-flex-end.MuiGrid-align-content-xs-flex-end.MuiGrid-grid-xs-11.MuiGrid-grid-sm-6.MuiGrid-grid-md-5.MuiGrid-grid-lg-4.MuiGrid-grid-xl-3 > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-direction-xs-column.MuiGrid-justify-content-xs-center > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div';
        this.btnEntregaSave = '.MuiGrid-align-items-xs-flex-end > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label';
        this.btnSave = '.MuiGrid-align-items-xs-flex-end > .MuiGrid-root > .MuiButtonBase-root';
        this.asignarEstado = '.MuiGrid-justify-content-xs-center > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label';
        this.fechaProfesional = '.MuiGrid-spacing-xs-3 > :nth-child(1) > form > :nth-child(1) > :nth-child(2) > .MuiGrid-root';
        this.calleProfesional = '.MuiGrid-spacing-xs-3 > :nth-child(1) > form > :nth-child(1) > :nth-child(3) > :nth-child(1)';
        this.alturaCalle = '.MuiGrid-spacing-xs-3 > :nth-child(1) > form > :nth-child(1) > :nth-child(3) > :nth-child(2)';
        this.provincia = '#provincia > .MuiInputBase-root > .MuiSelect-root';
        this.departamento = ':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root';
        this.ciudad = ':nth-child(10) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root';
        this.cpCode = ':nth-child(11) > .MuiFormControl-root';
        this.cellNumber = '.MuiGrid-spacing-xs-3 > :nth-child(1) > form > :nth-child(1) > :nth-child(5) > :nth-child(2)';
        this.email = 'form > :nth-child(1) > :nth-child(5) > :nth-child(3)';
        this.btnGuardar = 'form > .MuiGrid-justify-content-xs-flex-end > .MuiButtonBase-root';
        this.Soltero = '[data-value="SOL"]';
        this.uploadfileBtn = ':nth-child(7) > .MuiGrid-grid-xs-12 > .MuiButtonBase-root > .MuiButton-label';
        this.pisoBtn = '#Piso';
        this.dropdownBtn ='[data-value="Chaco"]';
        this.departamentDropdown = '[data-value="2 de Abril"]';
        this.actaDropdown = '[data-value="I"]';
        this.estadoBtn = '#estado';
        this.dropdownEstado = '[data-value="7"]';
        this.dropdownEstadoBtn = '[data-value="Chaco"]';
        this.departamentoDropdown = '[data-value="Bermejo"]';
        this.cityDropdown = '[data-value="Hermoso Campo"]';


    }

    personalData = (nombre, apellido, DNI, CUIT, city, date) => {
        cy.wait(1000)
        cy.visit('/afiliados/crear-escribano');
        cy.get(this.firstname).type(nombre);
        cy.get(this.lastName).type(apellido);
        cy.get(this.SelectDNI).click();
        cy.get(this.PickDNI).click()
        cy.get(this.DNI).type(DNI);
        cy.get(this.CUIT).type(CUIT)
        cy.get(this.City).type(city)
        cy.get(this.Date).type(date)
        cy.get(this.EstadoCivil).click()
        cy.get(this.Soltero).click()
        cy.get(this.SingleCheck).check()
        cy.get(this.btnSave).click({ force: true })
        cy.get(this.uploadfileBtn).click()
        cy.get(this.uploadFile).selectFile('cypress/fixtures/Images/imagen.jpg', { force: true })
        cy.get(this.uploadFile2).selectFile('cypress/fixtures/Images/imagen.jpg', { force: true })
        cy.get(this.btnContinue).click()
        cy.get(this.btnext3).click({ force: true })
        cy.get(this.btnext4).click()
    }

    contactData = (streetName, nro, manzana, piso, depto, observaciones, postalCode, movile, phone, fakeemail) => {
        cy.get(this.streetName).type(streetName);
        cy.get(this.streetNumber).type(nro)
        cy.get(this.manzanaName).type(manzana);
        cy.get(this.pisoBtn).type(piso);
        cy.get(this.DptoLetter).type(depto);
        cy.get(this.observacionesField).type(observaciones);
        cy.get(this.Province).click();
        cy.get(this.dropdownBtn).click()
        cy.get(this.Departament).type('{downarrow}');
        cy.get(this.departamentDropdown).click()
        cy.get(this.localidad).type('{downarrow}');
        cy.get(this.localBTN).click()
        cy.get(this.postalCode).type(postalCode);
        cy.get(this.mobileNumber).type(movile);
        cy.get(this.phone).type(phone);
        cy.get(this.fakemail).type(fakeemail);
        cy.get(this.savebtn).click()


    }
    profesionalData = (acta, ExpedidoPor, date, date2, fechaEntrega) => {
        cy.get(this.nextbtn).click()
        cy.get(this.actaDropdown).click()
        cy.get(this.acta).type(acta)
        cy.get(this.entidad).type(ExpedidoPor)
        cy.get(this.dateEtrega).type(date)
        cy.get(this.dataRecepcion).type(date2)
        cy.get(this.asignarEstado).click()
        cy.get(this.dateEntragaInput).type(fechaEntrega);
        cy.get(this.estadoBtn).click()
        cy.get(this.dropdownEstado).click()
        cy.get(this.dateEntregabtn).click()
        cy.get(this.btnEntregaSave).click()
    }
    profesionalContactData = (fechaEntrega, streetName, nro, movile, fakeemail)=>{
        cy.get(this.fechaProfesional).type(fechaEntrega);
        cy.get(this.calleProfesional).type(streetName)
        cy.get(this.alturaCalle).type(nro)
        cy.get(this.provincia).click()
        cy.get(this.dropdownEstadoBtn).click()
        cy.get(this.departamento).click()
        cy.get(this.departamentDropdown).click()
        cy.get(this.ciudad).click()
        cy.get(this.cityDropdown).click()
        cy.get(this.cpCode).type(3500)
        cy.get(this.cellNumber).type(movile)
        cy.get(this.email).type(fakeemail)
        cy.get(this.btnGuardar)
        .click()
}
}


export default new escribanosForm();