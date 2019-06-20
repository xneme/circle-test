describe('Front page is rendered', () => {
  it('Visits front page', () => {
    cy.visit('localhost:8000')
    cy.get('[data-cy=navbar]')
  })
})

describe('Messages are rendered', () => {
  it('Checking messages', () => {
    cy.visit('localhost:8000')
    cy.get('[data-cy=messagelist]').contains('Migrations work!')
  })
})
