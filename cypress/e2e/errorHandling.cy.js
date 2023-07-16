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

describe("Url entry for movie id that doesn't exist, a user", () => {
    before(() => {
        cy.visit('http://localhost:3000/409185')
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/409185', {
            statusCode: 404
        })
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 200
        })
    })

    it('Should see an error message', () => {
        cy.get('h2').contains("This movie doesn't exist, please return home and try again")
    })
})

describe('Url entry for invalid id type, a user', () => {
    before(() => {
        cy.visit('http://localhost:3000/nonsense')
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/nonsense', {
            statusCode: 500
        })
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 200
        })
    })

    it('Should see an error message', () => {
        cy.get('h2').contains("This movie doesn't exist, please return home and try again")
    })
})
