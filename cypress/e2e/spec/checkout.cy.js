import cart from "../page/cart"
import sauceLogin from "../page/sauceLogin"

describe('Data Driven Login',()=>{
    //loop through the accepted usernames
  beforeEach(()=>{
    cy.visit('/')
    })
  it('should checkout with a single item',()=>{
    sauceLogin.login('standard_user','secret_sauce')
    cart.addOneItemToCart();
    cart.checkout('Karen','Powell','12345')
    cy.get(cart.cartTotal).should('have.text','Total: $32.39')
    cart.completeOrder()
    cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')
    cy.get(cart.confirmationMsg).should('have.text','THANK YOU FOR YOUR ORDER')
  })
  it('should checkout with multiple items',()=>{
    sauceLogin.login('standard_user','secret_sauce')
    cart.addMultipleItemsToCart()
    cart.checkout('Karen','Powell','12345')
    cy.get(cart.cartTotal).should('have.text','Total: $97.17')
    cart.completeOrder()
    cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')
    cy.get(cart.confirmationMsg).should('have.text','THANK YOU FOR YOUR ORDER')
  })
  it('should not checkout without a first name',()=>{
    sauceLogin.login('standard_user','secret_sauce')
    cart.addMultipleItemsToCart()
    cart.checkoutWithoutFirstName('Levy','23452')
    cy.get(cart.checkoutInfoError).should('have.text','Error: First Name is required')
  })
  it('should not checkout without a last name',()=>{
    sauceLogin.login('standard_user','secret_sauce')
    cart.addOneItemToCart()
    cart.checkoutWithoutLastName('Leon','23452')
    cy.get(cart.checkoutInfoError).should('have.text','Error: Last Name is required')
  })
  it('should not checkout without a postal code',()=>{
    sauceLogin.login('standard_user','secret_sauce')
    cart.addOneItemToCart()
    cart.checkoutWithoutPostalCode('Leon','James')
    cy.get(cart.checkoutInfoError).should('have.text','Error: Postal Code is required')
  })

}) 