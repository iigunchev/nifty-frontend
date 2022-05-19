describe('allows a normal user to', () => {
  // log in
  beforeEach(() => {
    cy.visit('/');
    cy.get('.button > a').click();
    cy.get('a').click();
    cy.get('#emailInput').clear();
    cy.get('#emailInput').type('ivangunchev@email.com');
    cy.get('#passwordInput').clear();
    cy.get('#passwordInput').type('Pa$$w0rd');
    cy.get('.button').click();
    cy.findByText('Ivan').should('exist');
  });
  // it('see the landing page', () => {
  //   cy.get('h1').should('exist');
  // });

  // it('play a song', () => {
  //   cy.get(
  //     ':nth-child(1) > .playButtonWrapper > .buttonWithIcon > .icon'
  //   ).click();
  //   cy.get('.playStopButton > .filteredImg').click();
  // });

  // it('create a playlist', () => {
  //   cy.get(':nth-child(2) > ul > :nth-child(2) > .listItemLink > span').click();
  //   cy.get('.button > span').click();
  //   cy.get('#nameInput').clear();
  //   cy.get('#nameInput').type('MY LAST PLAYLIST');
  //   cy.get('.playlistFormWrapper > .button').click();
  //   cy.findByText('MY LAST PLAYLIST').should('exist');
  // });
});
