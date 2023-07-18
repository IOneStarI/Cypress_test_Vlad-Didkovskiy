class InventoryPage {

  elements = {
    shoppingCart: () => cy.get('#shopping_cart_container'),
    soppingCartBage: () => cy.get('.shopping_cart_badge'),
    inventoryItem: () => cy.get('.inventory_item'),
    itemTitle: () => cy.get('.inventory_item_name'),
    itemPrice: () => cy.get('.inventory_item_price'),
    itemDescr: () => cy.get('.inventory_item_desc'),
    toCartBtn: () => cy.get('.btn_inventory'),
    sortDropdown: () => cy.get('[data-test="product_sort_container"]')
  }

  clickShoppingCart() {
    this.elements.shoppingCart().click()
  }

  clickAddToCart() {
    this.elements.toCartBtn().click()
  }

  verifyInventoryItems(amountOfItems) {
    this.elements.inventoryItem().should('have.length', amountOfItems);
    this.elements.itemTitle().should('be.visible');
    this.elements.itemDescr().should('be.visible');
    this.elements.itemPrice().should('be.visible');
    this.elements.toCartBtn().should('be.visible');
  }

  addFirstItemToCart() {
    this.elements.inventoryItem().first().within(() => { this.clickAddToCart() })
  }
  addLastItemToCart() {
    this.elements.inventoryItem().last().within(() => { this.clickAddToCart() })
  }

  sortItemsAlphabetically() {
    this.elements.sortDropdown()
      .select("az")
  }
  sortItemsNonAlphabetically() {
    this.elements.sortDropdown()
      .select("za")
  }

  checkAlphabetickOrder(direction) {
    this.elements.itemTitle()
      .then((elements) => {
        const itemNames = [];

        elements.each((index, element) => {
          itemNames.push(element.innerText.trim());
        });

        const sortedNames = [...itemNames].sort((a, b) =>
          direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
        );

        expect(itemNames).to.deep.equal(sortedNames);
      });
  }

  sortItemsLowToHigh() {
    this.elements.sortDropdown()
      .select("lohi")
  }
  sortItemsHighToLow() {
    this.elements.sortDropdown()
      .select("hilo")
  }

  checkPriceOrder(direction) {
    this.elements.itemPrice()
      .then((elements) => {
        const itemPrices = [];

        elements.each((index, element) => {
          itemPrices.push(parseFloat(element.innerText.replace('$', '')));
        });

        const sortedPrices = [...itemPrices].sort((a, b) =>
          direction === 'asc' ? a - b : b - a
        );

        expect(itemPrices).to.deep.equal(sortedPrices);
      });

  }
}

module.exports = new InventoryPage()