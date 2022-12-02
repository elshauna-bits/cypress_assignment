class Login {
    get userName(){
        return ('#user-name')
    }
    get pasword(){
        return ('#password')
    }
    get loginBtn(){
        return ('#login-button')
    }

    login(userName,pasword){
        cy.get(this.userName).type(userName)
        cy.get(this.pasword).type(pasword)
        cy.get(this.loginBtn).click()
    }
}
export default new Login()