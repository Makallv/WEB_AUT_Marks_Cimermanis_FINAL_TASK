import BasePage from "../page-objects/Base.page";
import FormPage from "../page-objects/Form.page";
import {data} from "../support/data";

describe('Demoqa exam', () => {
  beforeEach(() => {
    BasePage.visit()
  })

  it('Fill the form and see the results', () => {

    FormPage.visit()
    FormPage.firstName.should('be.visible')
    FormPage.firstName.type(data.userData.firstName)
    FormPage.firstName.should('have.value', data.userData.firstName)
    FormPage.lastName.should('be.visible')
    FormPage.lastName.type(data.userData.lastName)
    FormPage.lastName.should('have.value', data.userData.lastName)
    FormPage.email.should('be.visible')
    FormPage.email.type(data.userData.email)
    FormPage.email.should('have.value', data.userData.email)
    FormPage.gender.should('be.visible')
    FormPage.gender.contains('Male').click()
    FormPage.phone.should('be.visible')
    FormPage.phone.type(data.userData.phone)
    FormPage.phone.should('have.value', data.userData.phone)
    FormPage.birthDate.should('be.visible')
    FormPage.birthDate.click()
    FormPage.dateContainer.should('be.visible')
    FormPage.month.should('be.visible')
    FormPage.month.select(1)
    FormPage.year.should('be.visible')
    FormPage.year.select("1930")
    FormPage.day.should('have.attr',
        'aria-label', 'Choose Friday, February 28th, 1930').click()
    FormPage.birthDate.should('have.value', '28 Feb 1930')
    FormPage.subjects.should('be.visible')
    FormPage.subjects.type('Economics {enter}')
    FormPage.hobbies.should('be.visible')
    FormPage.hobbies.contains('Music').click()
    FormPage.selectState.should('be.visible')
    FormPage.selectState.click()
    FormPage.selectStateList.should('be.visible')
    FormPage.selectStateList.contains('NCR').click()
    FormPage.selectCity.should('be.visible')
    FormPage.selectCity.click()
    FormPage.selectCityList.should('be.visible')
    FormPage.selectCityList.contains('Delhi').click()
    FormPage.registerButton.scrollIntoView().should('be.visible')
    FormPage.registerButton.click()
    FormPage.closeModal.should('be.visible')
    FormPage.closeModal.click()
  });
})