class HeaderUK    
{
// Comman for all three sites

serachBox(){
   return cy.get('.searchbar #algo_search').type('w',{ force: true })
}

searchedProductName(){
    return cy.get('#headerSearchHits .searchProd-name').first().click()
    
} 

serachAddToBasket(){
    return cy.get('.searchProd-block .btn-secondary').first().click()
}

invokeCart(){
    return cy.get('.cartDropBlock .dropdown-menu').invoke('show')
}

secureCheckout(){
    //return cy.contains('Secure').click({force: true})
    return cy.get('.cartDropBlock .dropdown-menu .arrowRight').click({force: true})
}

firstParentCategory(){
    return cy.get("#menu ul.list-unstyled li:nth-child(1).list-inline-item [aria-label][title]").click({force:true})
}

// firstChildCategory(){
//     return cy.get("#menu ul.list-unstyled li:nth-child(1).list-inline-item ul li:nth-child(2)").click({force:true})
// }

thirdParentCategory(){
    return cy.get("#menu ul.list-unstyled li:nth-child(3).list-inline-item [aria-label][title]").click({force:true})
}

fifthParentCategory(){
    return cy.get("#menu ul.list-unstyled li:nth-child(5).list-inline-item [aria-label][title]").click({force:true})
}

seventhParentCategory(){
    return cy.get("#menu ul.list-unstyled li:nth-child(7).list-inline-item [aria-label][title]").click({force:true})
}

cartDropDown(){
    return cy.get(".cartDropBlock .dropdown-menu")
}

burgerMenuLink(){
    return cy.get(".list-unstyled .list-inline-item a")
}

}




export default HeaderUK;