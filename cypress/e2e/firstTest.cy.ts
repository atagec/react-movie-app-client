describe('Homepage', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:5173/react-movie-app-client/')

  })
  it('cards should render to the screen', () => {

    cy.get('[data-testid="card-item"]').should('exist')

  })

  it('modal should be open when the add movie button is clicked', () => {
    cy.get('[data-testid="add-movie-button"]').click()

    cy.get('[data-testid="modal-container"]').should('exist')
    cy.get('[data-testid="modal-title-input"]').should('be.empty')
    cy.get('[data-testid="modal-director-input"]').should('be.empty')
    cy.get('[data-testid="modal-rating-input"]').should('be.empty')
    cy.get('[data-testid="modal-imageurl-input"]').should('be.empty')
    cy.get('[data-testid="modal-add-button"]').should('exist')
  

  })

 
})