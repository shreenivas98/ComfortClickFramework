class HeaderUK    
{
// Comman for all three sites

serachBox(){
   return cy.get('#algo_search').type('b')
}

searchedProductName(){
    return cy.get('#headerSearchHits .searchProd-name').first().click()
}

invokeCart(){
    return cy.get('.cartDropBlock .dropdown-menu').invoke('show')
}

secureCheckout(){
    return cy.contains('Secure').click({force: true})
}
}


export default HeaderUK;