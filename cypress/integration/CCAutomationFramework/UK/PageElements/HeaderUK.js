class HeaderUK    
{
// Comman for all three sites

serachBox(){
   return cy.get('.searchbar #algo_search').type('as')
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


}


export default HeaderUK;