
describe("Grupo 3 - Persistencia de tareas", () => {
  it("Conserva las tareas y la sesion al recargar", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.clear();
      }
    });

    cy.get("#usuario").type("admin");
    cy.get("#clave").type("admin123");
    cy.get("#btn-login").click();

    cy.get("#panel").should("be.visible");

    cy.get("#titulo").type("Revisar persistencia");
    cy.get("#btn-agregar").click();

    cy.get(".fila-tarea").should("have.length", 1);

    cy.reload();

    cy.get("#panel").should("be.visible");
    cy.get(".fila-tarea").should("have.length", 1);

    cy.get(".fila-tarea .col-titulo")
      .should("contain", "Revisar persistencia");
  });
});
