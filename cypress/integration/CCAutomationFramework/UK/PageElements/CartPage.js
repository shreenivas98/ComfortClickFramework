class CartPage{


    ProductTotal(){
        return cy.get('.product-total')
    }

    GrandTotal(){
        return cy.get('.order-total')
    }

    basketCheckoutBtn(){
        return cy.get('.product-pay-checkout #basketCheckoutBtn').click()
    }

}

export default CartPage;