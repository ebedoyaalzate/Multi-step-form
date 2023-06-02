describe('Success path', () => {
  describe('When you visit home', () => {
    it('Should visit home page', () => {
      cy.visit('/')
      cy.get('[data-cy=header-title]').contains('Personal Info')
    })

    it('Should fill personal info form and change to plan page', () => {
      cy.visit('/')
      cy.get('[data-testid=name-input]').type('jkhnjklhn')
      cy.get('[data-testid=email-input]').type('jkljklj@kjd.co')
      cy.get('[data-testid=phone-input]').type('+27312674484')
      cy.get('[data-testid=submit]').click()
      cy.get('[data-testid=header-title]').contains('Select your plan')
      cy.url().should('include', '/Plan')
    })

    it('Should fill plan info form and change to add ons page', () => {
      cy.visit('/Plan')
      cy.get('[data-testid=Arcade-card]').click()
      cy.get('[data-testid=submit]').click()
      cy.get('[data-testid=header-title]').contains('Pick add-ons')
      cy.url().should('include', '/add-ons')
    })

    it('Should fill add ons info form and change to summary page', () => {
      cy.visit('/add-ons')
      cy.get('[data-testid=Onlineservice-check]').click()
      cy.get('[data-testid=submit]').click()
      cy.get('[data-testid=header-title]').contains('Finishing up')
      cy.url().should('include', '/summary')
    })

    it('Should submit summary and change to success page', () => {
      cy.visit('/summary')
      cy.get('[data-testid=submit]').click()
      cy.get('[data-testid=header-title]').contains('Thank you!')
      cy.url().should('include', '/success')
    })
  })
})
