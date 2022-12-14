class logueaPage {


     constructor() {
          this.loguinButton = '.MuiButton-label';
          this.userNameInput = '.MuiFormControl-root:nth-child(1) .MuiInputBase-input';
          this.paswordInput = '.MuiInputBase-inputAdornedEnd';
          this.confirmarButton = '.MuiButton-root';

     }

     searchUsername = (element) => {
          cy.get(this.loguinButton).click();
          cy.get(this.userNameInput).type(element);
     }

     searchPassInput = (element) => {
          cy.get(this.paswordInput).type(element);
          cy.get(this.confirmarButton).click()


     }
}


export default new logueaPage();
