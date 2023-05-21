import BasePage from "./Base.page";

class FormPage extends BasePage{

    static get url(){
        return "/automation-practice-form"
    }

    static visit(){
        cy.visit(this.url)
    }

    static get firstName(){
        return cy.get("#firstName")
    }

    static get lastName(){
        return cy.get("#lastName")
    }

    static get email(){
        return cy.get("#userEmail")
    }

    static get phone(){
        return cy.get("#userNumber")
    }

    static get birthDate(){
        return cy.get("#dateOfBirthInput")
    }

    static get month(){
        return cy.get('.react-datepicker__month-select')
    }

    static get year(){
        return cy.get(".react-datepicker__year-select")
    }

    static get day(){
        return cy.get("[aria-label='Choose Friday, February 28th, 1930']")
    }

    static get registerButton(){
        return cy.get("#submit")
    }

    static get gender(){
        return cy.get("#genterWrapper")
    }

    static get closeModal() {
        return cy.get("#closeLargeModal")
    }

    static get dateContainer(){
        return cy.get(".react-datepicker__month-container")
    }

    static get hobbies(){
        return cy.get('#hobbiesWrapper')
    }

    static get subjects(){
        return cy.get("#subjectsInput")
    }

    static get selectState(){
        return cy.get("#state")
    }

    static get selectCity(){
        return cy.get("#city")
    }

    static get selectStateList(){
        return cy.get(".css-26l3qy-menu")
    }

    static get selectCityList(){
        return cy.get(".css-26l3qy-menu")
    }
}

export default FormPage;