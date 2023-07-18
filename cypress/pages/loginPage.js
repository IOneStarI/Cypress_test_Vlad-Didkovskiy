
class LoginPage {

  elements = {
    url: () => cy.url(),
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  }

  verifyUrl(url, endpoint=''){
    this.elements.url().should('eq', `${url}${endpoint}`)
  }

  typeUsername(username){
    this.elements.usernameInput().clear().type(username)
  }

  typePassword(password){
    this.elements.passwordInput().clear().type(password)
  }

  clickLogin(){
    this.elements.loginButton().click()
  }

  expectErrorMessage(message){
    this.elements.errorMessage().should('be.visible').and('have.text', `${message}`)
  }
}

module.exports = new LoginPage()