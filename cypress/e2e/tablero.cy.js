describe("Grupo 3 - Tablero de tareas", () => {
  beforeEach(() => {
    cy.visit("/", { onBeforeLoad(win) { win.localStorage.clear(); } });
  });
  it("Rechaza login incorrecto", () => {
    cy.get("#usuario").type("admin"); cy.get("#clave").type("incorrecta"); cy.get("#btn-login").click();
    cy.get("#login-msg").should("contain", "incorrectos"); cy.get("#panel").should("not.be.visible");
  });
  it("Login correcto muestra el panel", () => {
    cy.get("#usuario").type("admin"); cy.get("#clave").type("admin123"); cy.get("#btn-login").click();
    cy.get("#panel").should("be.visible");
  });
  it("Una tarea nueva aparece Pendiente", () => {
    cy.get("#usuario").type("admin"); cy.get("#clave").type("admin123"); cy.get("#btn-login").click();
    cy.get("#titulo").type("Tarea inicial"); cy.get("#btn-agregar").click();
    cy.get(".fila-tarea").should("have.length", 1).first().find(".estado-tarea").should("have.value", "Pendiente");
    cy.get("#contador-pendiente").should("have.text", "1");
  });
});
describe("Grupo 3 - Acciones con sesión reutilizada", () => {
  beforeEach(() => {
    cy.abrirPanel();
    cy.window().then(win => { win.localStorage.removeItem("tablero-grupo3-tareas"); });
    cy.reload();
    cy.get("#panel").should("be.visible");
  });
  it("Cambiar estado actualiza contadores", () => {
    cy.get("#titulo").type("Cambiar estado"); cy.get("#btn-agregar").click();
    cy.get("#contador-pendiente").should("have.text", "1");
    cy.get(".fila-tarea .estado-tarea").select("En progreso");
    cy.get("#contador-pendiente").should("have.text", "0");
    cy.get("#contador-progreso").should("have.text", "1");
  });
  it("Filtro muestra solo estado elegido y contadores de visibles", () => {
    cy.get("#titulo").type("Primera"); cy.get("#btn-agregar").click();
    cy.get("#titulo").type("Segunda"); cy.get("#btn-agregar").click();
    cy.get(".fila-tarea").eq(1).find(".estado-tarea").select("Hecha");
    cy.get("#filtro").select("Hecha");
    cy.get(".fila-tarea").should("have.length", 1).find(".col-titulo").should("have.text", "Segunda");
    cy.get("#contador-total").should("have.text", "1");
    cy.get("#contador-pendiente").should("have.text", "0");
    cy.get("#contador-hecha").should("have.text", "1");
  });
  it("Rechaza crear sin título", () => {
    cy.get("#btn-agregar").click();
    cy.get("#form-msg").should("contain", "título");
    cy.get(".fila-tarea").should("have.length", 0);
  });
  it("Eliminar tarea actualiza la lista", () => {
    cy.get("#titulo").type("Eliminarme"); cy.get("#btn-agregar").click();
    cy.get(".fila-tarea .btn-eliminar").click();
    cy.get(".fila-tarea").should("have.length", 0);
  });
});
describe("Grupo 3 - Pruebas guiadas por datos", () => {
  beforeEach(() => {
    cy.abrirPanel();
    cy.window().then(win => { win.localStorage.removeItem("tablero-grupo3-tareas"); });
    cy.reload();
  });
  it("Prueba varios estados de tarea desde fixtures y forEach", () => {
    cy.fixture("casos-tareas.json").then(casos => {
      casos.forEach((caso, indice) => {
        cy.get("#titulo").type(caso.titulo);
        cy.get("#estado").select(caso.estado);
        cy.get("#btn-agregar").click();
        cy.get(".fila-tarea").should("have.length", indice + 1);
        cy.get(".fila-tarea").eq(indice).find(".estado-tarea").should("have.value", caso.estado);
      });
      cy.get("#contador-total").should("have.text", String(casos.length));
    });
  });
});
