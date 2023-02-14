/// <reference types="cypress" />

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="/about"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/about')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page')
    cy.findByTestId(/about/).contains(/about page/i)
  })
  it('should navigate to the rtk-query page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "rtk-query" and click it
    cy.get('a[href*="/rtk-query"]').click()

    // The new url should include "/rtk-query"
    cy.url().should('include', '/rtk-query')

    // The new page should contain an h1 with "Rtk-query page"
    cy.get('h1').contains('React Toolkit Query Page')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
