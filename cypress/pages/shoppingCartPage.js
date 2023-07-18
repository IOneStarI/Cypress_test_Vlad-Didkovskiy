class ShoppingCartPage {
  elements = {
    cartItem: () => cy.get('.cart_item'),
    cartRemoveBtn: () => cy.get('.cart_button'),
    itemName: () => cy.get('.inventory_item_name'),
    itemDescr: () => cy.get('.inventory_item_desc'),
    itemPrice: () => cy.get('.inventory_item_price'),
    itemQantity: () => cy.get('.cart_quantity'),
    continueSoppingBtn: () => cy.get('[data-test="continue-shopping"]'),
    checkoutBtn: () => cy.get('[data-test="checkout"]'),
  }

  clickContinueShopping(){
    this.elements.continueSoppingBtn().click()
  }

  clickCheckoutBtn(){
    this.elements.checkoutBtn().click()
  }

  removeItem(){
    this.elements.cartRemoveBtn().click()
  }

  verifyShopingCartWithItems(amountOfItems) {
    this.elements.cartItem().should('have.length', amountOfItems);
    this.elements.itemName().should('be.visible');
    this.elements.itemDescr().should('be.visible');
    this.elements.itemPrice().should('be.visible');
    this.elements.itemQantity().should('be.visible');
    this.elements.continueSoppingBtn().should('be.visible').and('be.enabled');
    this.elements.checkoutBtn().should('be.visible').and('be.enabled');
    this.elements.cartRemoveBtn().should('be.visible').and('be.enabled');
  }

  verifyEmptyShopingCart() {
    this.elements.cartItem().should('not.exist');
    this.elements.continueSoppingBtn().should('be.visible').and('be.enabled');
    this.elements.checkoutBtn().should('be.visible').and('be.enabled');
  }
}

module.exports = new ShoppingCartPage();