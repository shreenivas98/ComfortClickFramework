class PLP{
    productPrice(){
        return cy.get('.product-price>.text-secondary')
    }

    quickViewbtn(){
        return cy.get('.quickButton').first().click({force:true})
    }

    quickViewAddToBasketBtn(){
        return cy.get('button.btn-secondary').click({force:true})
    }

}
export default PLP;
