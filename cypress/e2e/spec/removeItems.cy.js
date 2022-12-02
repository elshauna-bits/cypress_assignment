import cart from "../page/cart"
import sauceLogin from "../page/sauceLogin"

describe('Item Removal',()=>{
    beforeEach(()=>{
        cy.visit('/')
        sauceLogin.login('standard_user','secret_sauce')
    })
    it('should remove item from cart',()=>{
        cart.addOneItemToCart()
        cart.removeFromCart()
        cy.get(cart.cartDiv).should('not.exist')
    })
    it('should remove item from products page',()=>{
        cart.addOneItemToCart()
        cart.removefromProductsPage()
        cy.get(cart.addBackpack).should('have.text','Add to cart')
    })
})