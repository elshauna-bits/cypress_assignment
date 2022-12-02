class Cart{
    get addBackpack(){
        return ('#add-to-cart-sauce-labs-backpack')
    }
    get addBikeLight(){
        return ('#add-to-cart-sauce-labs-bike-light')
    }
    get addFleeceJacket(){
        return('#add-to-cart-sauce-labs-fleece-jacket')
    }
    get removeBackpack(){
        return ('#remove-sauce-labs-backpack')
    }
    get shoppingCart(){
        return ('.shopping_cart_link')
    }
    get checkoutBtn(){
        return ('#checkout')
    }
    get firstName(){
        return ('#first-name')
    }
    get lastName(){
        return ('#last-name')
    }
    get zipCode(){
        return ('#postal-code')
    }
    get continueBtn(){
        return ('#continue')
    }
    get finishBtn(){
        return ('#finish')
    }
    get cartTotal(){
        return('.summary_total_label')
    }
    get confirmationMsg(){
        return('.complete-header')
    }
    get cartDiv(){
        return('#item_4_title_link > div')
    }
    get checkoutInfoError(){
        return(`h3[data-test='error']`)
    }
    addOneItemToCart(){
        cy.get(this.addBackpack).click()
    }
    addMultipleItemsToCart(){
        cy.get(this.addBackpack).click()
        cy.get(this.addBikeLight).click()
        cy.get(this.addFleeceJacket).click()
    }
    checkout(firstName,lastName,zipCode)
    {
        cy.get(this.shoppingCart).click()
        cy.get(this.checkoutBtn).click()
        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(lastName)
        cy.get(this.zipCode).type(zipCode)
        cy.get(this.continueBtn).click()
        
    }
    checkoutWithoutFirstName(lastName,zipCode){
        cy.get(this.shoppingCart).click()
        cy.get(this.checkoutBtn).click()
        cy.get(this.lastName).type(lastName)
        cy.get(this.zipCode).type(zipCode)
        cy.get(this.continueBtn).click()
    }
    checkoutWithoutLastName(firstName,zipCode){
        cy.get(this.shoppingCart).click()
        cy.get(this.checkoutBtn).click()
        cy.get(this.firstName).type(firstName)
        cy.get(this.zipCode).type(zipCode)
        cy.get(this.continueBtn).click()
    }
    checkoutWithoutPostalCode(firstName,lastName){
        cy.get(this.shoppingCart).click()
        cy.get(this.checkoutBtn).click()
        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(lastName)
        cy.get(this.continueBtn).click()
    }
    completeOrder(){
        cy.get(this.finishBtn).click()

    }
    removeFromCart(){
        cy.get(this.shoppingCart).click()
        cy.get(this.removeBackpack).click()
    }
    removefromProductsPage(){
        cy.get(this.removeBackpack).click()
    }
}
export default new Cart()