describe('500 error', () => {
    before(() => {
        cy.visit('http://localhost:3000')
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 500
        })
    })

    it('Should show user an error message', () => {
        cy.get('h2').contains('Sorry, something went wrong.')
    })
})
