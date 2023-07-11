describe('Movie View user flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
            "movies": [
              {
                  "id": 436270,
                  "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
                  "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
                  "title": "Black Adam",
                  "average_rating": 4,
                  "release_date": "2022-10-19"
              },
              {
                  "id": 724495,
                  "poster_path": "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
                  "backdrop_path": "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
                  "title": "The Woman King",
                  "average_rating": 4,
                  "release_date": "2022-09-15"
              }
            ]
          }
    })
  })

  it('Should display an individual movie and its details', () => {
    cy.get('h2').contains('Black Adam').click()
    .get('#info3').contains('2022-10-19')
    .get('[alt="poster for Black Adam"]').should('be.visible')
    .get('#info4').contains('4.00')
  })

  it('Should return to dashboard when button is clicked', () => {
    cy.get('h2').contains('Black Adam').click()
    .get('header').contains('All Movies Are Bad')
    .get('button').click()
    .get('main').find('.individual-card').should('have.length', 2)
  })

})