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


}




export default HomePageUk;