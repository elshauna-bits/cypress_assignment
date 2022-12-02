class Sort{
    get filter(){
        return('.product_sort_container')
    }
    get itemNames(){
        return('.inventory_item_name')
    }
    get price() {
         return ('.inventory_item_price')
         }
    selectSortOpt(sort){
        cy.get(this.filter).select(sort)
    }
}
export default new Sort()