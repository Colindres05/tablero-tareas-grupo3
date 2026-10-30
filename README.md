
# Tablero de Tareas — Grupo 3 (UMG)

![Pruebas Cypress](https://github.com/Colindres05/tablero-tareas-grupo3/actions/workflows/cypress.yml/badge.svg)

Proyecto final de Aseguramiento de la Calidad de Software de la Universidad Mariano Gálvez.

Aplicación web desarrollada con HTML, CSS y JavaScript que permite gestionar tareas y verificar su funcionamiento mediante Cypress y GitHub Actions.

## Credenciales de acceso

- Usuario: `admin`
- Contraseña: `admin123`

La aplicación utiliza `localStorage` para almacenar tareas y sesión. Las credenciales son únicamente para demostración académica.

## Instalación y ejecución

Instalar las dependencias:

```powershell
npm.cmd install
```

Iniciar el servidor:

```powershell
npm.cmd start
```

Abrir la aplicación en:

http://localhost:3000

## Ejecutar las pruebas Cypress

En una segunda terminal:

```powershell
npx.cmd cypress run --browser electron
```

## Funcionalidades

- Inicio de sesión correcto e incorrecto.
- Creación de tareas.
- Validación de título obligatorio.
- Estados: Pendiente, En progreso y Hecha.
- Cambio de estado de las tareas.
- Filtros por estado.
- Contadores correspondientes a las tareas visibles.
- Eliminación de tareas.
- Persistencia de datos mediante localStorage.

## Pruebas automatizadas

- `cypress/e2e/tablero.cy.js`: verifica el login, la creación de tareas, cambios de estado, filtros, validaciones y eliminación.
- `cypress/e2e/persistencia.cy.js`: verifica que las tareas y la sesión se conserven después de recargar la página.
- `cypress/fixtures/casos-tareas.json`: contiene los datos utilizados en pruebas guiadas por datos mediante `forEach`.
- `cypress/support/commands.js`: contiene comandos personalizados de Cypress.

Actualmente se cuenta con 9 pruebas automatizadas aprobadas.

## Tema investigado 1: Comandos personalizados y caché de sesión

Se implementaron comandos personalizados utilizando `Cypress.Commands.add()` para reutilizar acciones frecuentes.

También se utiliza `cy.session()` para conservar y reutilizar la sesión de autenticación durante las pruebas, evitando repetir innecesariamente el proceso de login.

La implementación se encuentra en:

`cypress/support/commands.js`

## Tema investigado 2: Reportes y estado de pruebas

Se utiliza Mochawesome para generar reportes de los resultados de Cypress.

Los reportes se guardan en:

`cypress/reports`

GitHub Actions ejecuta las pruebas automáticamente cuando se realizan operaciones `push` o `pull_request`.

Los videos, capturas y reportes se almacenan como artefactos de las ejecuciones.

El indicador ubicado al inicio del README muestra el estado del flujo de GitHub Actions.

## Integrantes y responsabilidades

| Integrante | Responsabilidad | GitHub |
|---|---|---|
| Integrante 1 | Desarrollo principal y coordinación | Colindres05 |
| Integrante 2 | Pruebas Cypress y persistencia | Cindy18-5 |
| Integrante 3 | Documentación y reportes | Por completar |

## Evidencias

Las ejecuciones y los artefactos de Cypress pueden consultarse en:

https://github.com/Colindres05/tablero-tareas-grupo3/actions

## Entrega final

El proyecto incluye una aplicación funcional, pruebas automatizadas, GitHub Actions, participación mediante Pull Requests y documentación académica.

La exposición contempla la demostración de ejecuciones aprobadas y fallidas, además de una modificación sencilla realizada en vivo.

