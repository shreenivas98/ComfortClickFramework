class CartPage{


    ProductTotal(){
        return cy.get('.product-total')
    }

    GrandTotal(){
        return cy.get('.order-total')
    }

    ProductTotalFR(){
        return cy.get('.basketBody .text-secondary')
    }    

    basketCheckoutBtn(){
        return cy.get('.product-pay-checkout #basketCheckoutBtn').click()
    }

    GrandTotalFR(){
        return cy.get('.basketFooter .text-secondary')
    }

}

export default CartPage;