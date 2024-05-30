class DetailsPage{

    AddToBasket_WW(){
        return cy.get('.col-lg-5 > :nth-child(1) > .col-sm-12 > :nth-child(4)').click({force:true})
    }

    AddToBasket_STB(){
        return cy.get('#ATCQTY').click({force:true})
    }

    AddToBasket_Animigo(){ 
        return cy.get('#ATCQTY').click({force:true})
    }

    Frequently_Baught_Together_WW(){
        return cy.get('.review-wrap_title').first().should('have.text','Frequently bought together')
    }

    BulkBuy_Two_Qty(){
        return cy.get('#bulk_buy_qty_2').click({force: true})
    }
    
    PlusButton(){
        return cy.get('.numberBlock .inputNumber button.plus').click({force: true})
    }
    
    Frequently_Baught_AddToCArt(){
        return cy.get('.boughtTogetherBlock .buttonBlock#addToAll').click()
    }

}

export default DetailsPage;