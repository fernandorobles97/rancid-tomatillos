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
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      body: {
        "movie": {
        "id": 436270,
        "title": "Black Adam",
        "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "release_date": "2022-10-19",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "genres": [
            "Action",
            "Fantasy",
            "Science Fiction"
        ],
        "budget": 200000000,
        "revenue": 384571691,
        "runtime": 125,
        "tagline": "The world needed a hero. It got Black Adam.",
        "average_rating": 4
      }
      }
    })
  })

  it('Should display an individual movie and its details', () => {
    cy.get('h2').contains('Black Adam').click()
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
  })

})