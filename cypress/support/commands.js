Cypress.Commands.add("sesionAdmin", () => {
  cy.session("admin-grupo3", () => {
    cy.visit("/");
    cy.get("#usuario").type("admin");
    cy.get("#clave").type("admin123");
    cy.get("#btn-login").click();
    cy.get("#panel").should("be.visible");
  }, { validate() { cy.window().its("localStorage").invoke("getItem", "sesion-grupo3").should("eq", "activa"); } });
});
Cypress.Commands.add("abrirPanel", () => { cy.sesionAdmin(); cy.visit("/"); cy.get("#panel").should("be.visible"); });
