describe("Check Main Nav", () => {
  it("Should return '點點簽' in h1 tag", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "點點簽");
  });
});
