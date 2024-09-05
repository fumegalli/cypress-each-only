describe('template spec', () => {
  // Error it.only.each is not a function
  it.only.each([
    { title: 'Cypress example', url: 'https://example.cypress.io' },
    { title: 'Cypress example /utilities', url: 'https://example.cypress.io/utilities' },
    { title: 'Cypress example /cypress-api', url: 'https://example.cypress.io/cypress-api' }
  ])
    (({ title }) => `should visit ${title}`,
    ({ url }) => {
      cy.visit(url)
  })

  it('sum', () => {
    expect(1 + 1).to.eq(2)
  })
})
