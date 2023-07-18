class BurgerMenu {
  elements = {
    burgerMebuBtn: () => cy.get('#react-burger-menu-btn'),
    crossButn: () => cy.get('#react-burger-cross-btn'),
    burgerMenuList: () => cy.get('.bm-item-list'),
    inventoryLink: () => cy.get('#inventory_sidebar_link'),
    aboutLink: () => cy.get('#about_sidebar_link'),
    logoutLink: () => cy.get('#logout_sidebar_link'),
    resetLink: () => cy.get('#reset_sidebar_link')
  }

  clickBurgerMenu() {
    this.elements.burgerMebuBtn().click()
  }

  closeBurgerMenu() {
    this.elements.crossButn().click()
  }

  goToInventoryPage() {
    this.elements.inventoryLink().click()
  }

  goToAboutPage() {
    this.elements.aboutLink().click()
  }

  logout() {
    this.elements.logoutLink().click()
  }

  clickResetAppState() {
    this.elements.resetLink().click()
  }
}

module.exports = new BurgerMenu();