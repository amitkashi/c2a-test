describe("compare pdf files", () => {
  it("compare pdf file = true", () => {
    cy.readFile("cypress/fixtures/pdf1.pdf", "utf8");
    cy.readFile("cypress/fixtures/pdf2.pdf", "utf8");

    cy.task("readPdf", "cypress/fixtures/pdf1.pdf").then((text) => {
      cy.task("readPdf", "cypress/fixtures/pdf2.pdf").then((text2) => {
        expect(text).to.eq(text2);
      });
    });
  });

  it("compare pdf file = false", () => {
    cy.readFile("cypress/fixtures/pdf1.pdf", "utf8");
    cy.readFile("cypress/fixtures/pdf3.pdf", "utf8");

    cy.task("readPdf", "cypress/fixtures/pdf1.pdf").then((text) => {
      cy.task("readPdf", "cypress/fixtures/pdf3.pdf").then((text2) => {
        expect(text).to.not.eq(text2);
      });
    });
  });
});
