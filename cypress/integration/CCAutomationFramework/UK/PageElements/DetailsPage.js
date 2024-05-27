class DetailsPage{

    AddToBasket_WW(){
        cy.get('.col-lg-5 > :nth-child(1) > .col-sm-12 > :nth-child(4)').click()
    }

    AddToBasket_STB(){
    cy.get('#ATCQTY').click({force:true})
    }

    AddToBasket_Animigo(){
        cy.get('#ATCQTY').click({force:true})
    }

}

export default DetailsPage;