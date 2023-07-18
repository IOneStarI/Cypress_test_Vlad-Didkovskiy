/// <reference types='cypress' />
import LoginPage from '../pages/loginPage';
import InventoryPage, { sortItemsAlphabetically } from '../pages/inventoryPage';
import BurgerMenu from '../pages/burgerMenu';
import ShoppingCartPage from '../pages/shoppingCartPage';

describe('Test task Inforce', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Verify that the page loaded successfully', () => {
    LoginPage.verifyUrl('https://www.saucedemo.com/')
  });

  it('Verify elements of login form displaed correctly', () => {
    LoginPage.elements.usernameInput().should('be.visible').and('have.attr', 'placeholder', 'Username')
    LoginPage.elements.passwordInput().should('be.visible').and('have.attr', 'placeholder', 'Password')
    LoginPage.elements.loginButton().should('be.visible')
  });

  it('Log in without filling username', () => {
    LoginPage.typeUsername('{backspace}')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()
    LoginPage.expectErrorMessage('Epic sadface: Username is required')
  });

  it('Log in without filling password', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('{backspace}')
    LoginPage.clickLogin()
    LoginPage.expectErrorMessage('Epic sadface: Password is required')
  });

  it('Log in without filling password and username', () => {
    LoginPage.typeUsername('{backspace}')
    LoginPage.typePassword('{backspace}')
    LoginPage.clickLogin()
    LoginPage.expectErrorMessage('Epic sadface: Username is required')
  });

  it('Log in with invalid username', () => {
    LoginPage.typeUsername('user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()
    LoginPage.expectErrorMessage('Epic sadface: Username and password do not match any user in this service')
  });

  it('Log in with invalid password', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('sauce')
    LoginPage.clickLogin()
    LoginPage.expectErrorMessage('Epic sadface: Username and password do not match any user in this service')
  });

  it('Log in with locked user', () => {
    LoginPage.typeUsername('locked_out_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()
    LoginPage.expectErrorMessage('Epic sadface: Sorry, this user has been locked out.')
  });

  it('Verify user can login and logout', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()

    LoginPage.verifyUrl('https://www.saucedemo.com/', 'inventory.html')

    BurgerMenu.clickBurgerMenu()
    BurgerMenu.elements.logoutLink().should('be.visible')
    BurgerMenu.logout()

    LoginPage.verifyUrl('https://www.saucedemo.com/')
  });
  // aditional tests
  it('Verify item list displaed corectly', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()

    InventoryPage.verifyInventoryItems(6)
  });

  it('User can add item to shopping cart', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()

    InventoryPage.addFirstItemToCart()
    InventoryPage.addLastItemToCart()
    InventoryPage.elements.soppingCartBage().should('be.visible').and('have.text', '2')
    InventoryPage.clickShoppingCart()

    ShoppingCartPage.verifyShopingCartWithItems(2)
  });

  it('User can remove item to shopping cart', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()

    InventoryPage.addFirstItemToCart()
    InventoryPage.clickShoppingCart()

    ShoppingCartPage.removeItem()
    ShoppingCartPage.verifyEmptyShopingCart()
  });

  it('Verify items are sorted alphabetically', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()

    InventoryPage.sortItemsAlphabetically()
    InventoryPage.checkAlphabetickOrder('asc')
  });

  it('Verify items are sorted oposite way', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()

    InventoryPage.sortItemsNonAlphabetically()
    InventoryPage.checkAlphabetickOrder('desc')
  });

  it('Verify items are sorted by price low to high', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()

    InventoryPage.sortItemsLowToHigh()
    InventoryPage.checkPriceOrder('asc')
  });

  it('Verify items are sorted by price high to low', () => {
    LoginPage.typeUsername('standard_user')
    LoginPage.typePassword('secret_sauce')
    LoginPage.clickLogin()

    InventoryPage.sortItemsHighToLow()
    InventoryPage.checkPriceOrder('desc')
  });
});