class HeaderUK    
{
// Comman for all three sites

serachBox(){
    cy.get('#algo_search').type('b')
}

searchedProductName(){
    cy.get('#headerSearchHits .searchProd-name').first().click()
}

}


export default HeaderUK;