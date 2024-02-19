// describe("Homepage", () => {
//   let cardCount;
//   const movie = {
//     title: "Shawshank Redemption",
//     director: "Frank Darabont",
//     rating: "9.3",
//     imageURL: "https://m.media-amazon.com/images/M/MV5BMzBmNWM0YzktOTM2MC00MzVkLWFiNjUtNWVjMWRiOTQ0OWM0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UY3000_.jpg"
//   }
//   beforeEach(() => {
//     cy.visit("http://localhost:5173/react-movie-app-client/");
//   });

//   it("it adds a new movie", () => {
 

//     cy.get('[data-testid="card-item"]').then($value => {
//       cardCount = $value.length;
//       lastCardDOMOrder = cardCount - 1;
//     });




    // cy.get('[data-testid="add-movie-button"]').click()
    // cy.get('[data-testid="modal-title-input"]').type(movie.title)
    // cy.get('[data-testid="modal-director-input"]').type(movie.director)
    // cy.get('[data-testid="modal-rating-input"]').type(movie.rating)
    // cy.get('[data-testid="modal-imageurl-input"]').type(movie.imageURL)

    // cy.get('[data-testid="modal-add-button"]')
    //   .click()
    // Check if the movie is added
    // .then(() => {

    // })

//   });
// });
