describe('Restaurants Application', function() {
  beforeEach(function(){
    cy.visit('http://localhost:3000') // go to the main page
  })

  it('clicking the arrows works', function() {
    const id = 'carousel_1'

    cy.getCarouselSelected(id)
      .should('contain', 'Sea Chain') // Sea Chain should be initially selected (in Popular Restaurants)
      .should('not.contain', 'Salt') // ...and not Salt

    cy.clickCarouselRightArrow(id) // click the right arrow once

    cy.getCarouselSelected(id).should('contain', 'Salt') // The selected item should now be Salt

    cy.clickCarouselLeftArrow(id) // click the left arrow once

    cy.getCarouselSelected(id).should('contain', 'Sea Chain') // The selected item should be Sea Chain again
  })

  it.only('Online/Offline are rendered appropriately depending on the restaurant', function() {
    const id = 'carousel_3'

    cy.getCarouselSelected(id)
      .should('contain', 'Tender Lettuce') // Selected item should be Tender Lettuce (in the Nearby Restaurants)
      .should('contain', 'Online') // Tender Lettuce should be online
      .should('not.contain', 'Offline') // ...and not offline

    cy.clickCarouselLeftArrow(id) // click the left arrow once

    cy.getCarouselSelected(id)
      .should('contain', 'Rosemary') // Selected item should be now be Rosemary
      .should('contain', 'Offline') // Rosemary should be Offline
      .should('not.contain', 'Online') // ...and not online
  })

  it('carousel loops', function() {
    const id = 'carousel_2'

    cy.getCarouselSelected(id)
      .should('contain', 'Corn Place') // the selected item in New Restaurants should be Corn Place
      .should('not.contain', 'Salt') // ...and not salt

    cy.clickCarouselRightArrow(id) // press the right arrow once

    cy.getCarouselSelected(id).should('contain', 'Salt') // the selected item should be Salt now

    cy.clickCarouselRightArrow(id) // press the right arrow once

    cy.getCarouselSelected(id).should('contain', 'Chili powder') // the selected item should be Chili powder now

    cy.clickCarouselRightArrow(id) // press the right arrow once

    cy.getCarouselSelected(id).should('contain', 'Corn Place') // the selected item should be Corn Place now, which means that the carousel has looped
  })
})