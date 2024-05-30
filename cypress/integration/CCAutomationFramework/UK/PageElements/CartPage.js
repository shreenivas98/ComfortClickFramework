class CartPage{


    ProductTotal(){
        return cy.get('.product-total')
    }

    GrandTotal(){
        return cy.get('.order-total')
    }


}

export default CartPage;