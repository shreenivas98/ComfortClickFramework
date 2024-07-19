class PLP{
    productPrice(){
        return cy.get('.product-price>.text-secondary')
    }

    filteredPrices(){
        return cy.get(".CProBox[style=''] b.text-secondary")
    }
    quickViewbtn(){
        return cy.get('.quickButton').first().click({force:true})
    }

    maxFilteredPrice(){
        return cy.get('.rangePriceBlock .max')
    }

    quickViewAddToBasketBtn(){
        return cy.get('.quickView-info button.btn-secondary').click({force:true})
    }

    priceSlider(){
        return cy.get('.max-slider-handle')
    }

    AddToBasketBtnPLP(){
        return cy.get('.productWrap .btn-basketGreen')
    }

    productModalOverlay(){
        return cy.get('.productModal .modal-header')
    }

    popUpAddToBasketBtn(){
        return cy.get('.btn-btnBlue')
    }


}
export default PLP;
