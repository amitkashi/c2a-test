Cypress.Commands.add("clickOnElement", (id: string) => {
  cy.get(id).click();
});

Cypress.Commands.add("clickOnElementContains", (id: string) => {
  cy.contains(id).click();
});
