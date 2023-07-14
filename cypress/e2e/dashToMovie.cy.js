describe('Movie View user flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'movies'
    })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'movie' 
    })
  })

  it('Should display an individual movie and its details', () => {
    cy.get('h2').contains('Black Adam').click()
    .url().should('include', '/436270')
    .get('#info1').contains('Black Adam')
    .get('#info2').contains('Action Fantasy Science Fiction')
    .get('#info3').contains('2022-10-19')
    .get('#info3').contains('125')
    .get('[alt="poster for Black Adam"]').should('be.visible')
    .get('#info4').contains('4')
    .get('#info4').contains('Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    .get('#info5').contains('200000000')
    .get('#info5').contains('384571691')
  })

  it('Should return to dashboard when button is clicked', () => {
    cy.get('h2').contains('Black Adam').click()
    .get('header').contains('All Movies Are Bad')
    .get('button').click()
    .get('main').find('.individual-card').should('have.length', 2)
    .url().should('eql', 'http://localhost:3000/')
  })
})
