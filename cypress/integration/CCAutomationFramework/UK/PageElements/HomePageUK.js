class HomePageUk    
{
// Comman for all three sites
newArrivalSlider()
{ 
    return cy.get('.newArrivalsWrapper') 
}

acceptCookieButton()
{
    return cy.get('#cookiescript_accept')
}

featuredProducts(){
    return cy.get('.newFeaturedWrapper')
}

heroBanner(){
    return cy.get('.homeBanner')
}

ambassadorFavourites(){
    return cy.get('.ucgWrapper')
}

AddToBasket_WW(){
    cy.get('.col-lg-5 > :nth-child(1) > .col-sm-12 > :nth-child(4)').click()
}
}




export default HomePageUk;