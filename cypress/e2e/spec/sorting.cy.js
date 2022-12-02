import sauceLogin from "../page/sauceLogin"
import sort from "../page/sort"
import products from '../data/products'

describe('Sorting Products',()=>{
    beforeEach(()=>{
        cy.visit('/')
        sauceLogin.login('standard_user','secret_sauce')
    })
    it('should sort products from A-Z',()=>{
        cy.get(sort.filter).select('az')
        const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        products.sort()

        cy.get(sort.itemNames).each(($elem,index) =>{
            expect($elem.text()).equal(products[index])
        })

    })
    it('should sort products from Z-A',()=>{
        cy.get(sort.filter).select('za')
        const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        products.sort().reverse()

        cy.get(sort.itemNames).each(($elem,index) =>{
            expect($elem.text()).equal(products[index])
        })

    })
    it('should sort products from low to high',()=>{
        sort.selectSortOpt(products.sort['Low to High'])

        //sorting products from low to high
        products.products.sort((a,b) => a.price-b.price)
        
        cy.get(sort.price).each(($elem,index) =>{
            expect($elem.text()).equal(`$${products.products[index].price}`)
        })

    })
    it('should sort products from high to low',()=>{
        sort.selectSortOpt(products.sort['High to Low'])

        //sorting products from high to low
        products.products.sort((a,b) => b.price-a.price)
        
        cy.get(sort.price).each(($elem,index) =>{
            expect($elem.text()).equal(`$${products.products[index].price}`)
        })

    })
})