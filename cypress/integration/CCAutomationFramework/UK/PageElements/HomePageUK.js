class HomePageUk    
{
// Comman for all three sites
newArrivalSlider()
{ 
    return cy.get('.newArrivalsWrapper') 
}

acceptCookieButton()
{
    return cy.get('#cookiescript_injected #cookiescript_buttons #cookiescript_accept')
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

newArrivalProduct(){
    return cy.get('.newArrivalsWrapper .thumbCaps .customNLSlide img').first().click({force:true})
}

}




export default HomePageUk;