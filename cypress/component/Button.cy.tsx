import React from 'react'
import Button from '../../src/components/Button'

describe('<Button />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button>I am the test button</Button>)
  })
})

describe('Shows primary button', () => {
  it('mounts with primary variant', () => {
    cy.mount(<Button variant="primary">I am primary button</Button>)
    cy.get('button').should('have.class', 'bg-primary')
  })
})

describe('Shows secondary button', () => {
  it('mounts with secondary variant', () => {
    cy.mount(<Button variant="secondary">I am secondary button with NO background</Button>)
    cy.get('button').should('not.have.class', 'bg-primary')
  })
})