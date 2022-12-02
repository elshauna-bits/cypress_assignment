const data = require('../../fixtures/sauceLabsLoginData.json')
import sauceLogin from "../page/sauceLogin"

describe('Data Driven Login',()=>{
    //loop through the accepted usernames
  beforeEach(()=>{
    cy.visit('/')
    })
  
   data.forEach(user =>{
        it(user.name,()=>{
            cy.get(sauceLogin.userName).type(user.username)
            cy.get(sauceLogin.pasword).type(user.password)
            cy.get(sauceLogin.loginBtn).click()
            cy.url().should('eq',user.expectedUrl)
            
        })
    })

}) 
        