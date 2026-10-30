# Investigación de temas complementarios

**Proyecto:** Tablero de Tareas — Grupo 3  
**Curso:** Aseguramiento de la Calidad de Software  
**Universidad:** Universidad Mariano Gálvez de Guatemala

## 1. Introducción

El proyecto Tablero de Tareas es una aplicación web desarrollada utilizando HTML, CSS y JavaScript. Permite iniciar sesión, registrar tareas, cambiar sus estados, aplicar filtros y consultar contadores. Para garantizar el cumplimiento de sus reglas de negocio, se implementaron pruebas automatizadas con Cypress.

Como parte del proyecto final, se investigaron y aplicaron dos temas complementarios: los comandos personalizados y la reutilización de sesiones en Cypress, así como la generación de reportes con Mochawesome y la visualización del estado de las pruebas mediante GitHub Actions.

## 2. Tema 1: Comandos personalizados y caché de sesión

### ¿En qué consisten?

Los comandos personalizados permiten reutilizar operaciones frecuentes dentro de las pruebas automatizadas. Cypress ofrece la función `Cypress.Commands.add()` para definir estos comandos y utilizarlos posteriormente.

Por otra parte, `cy.session()` permite guardar y restaurar información de una sesión, incluyendo los datos de almacenamiento del navegador. Esto facilita reutilizar una autenticación válida sin repetir todos los pasos del inicio de sesión en cada prueba.

### Aplicación en nuestro proyecto

En el archivo `cypress/support/commands.js` se implementaron dos comandos:

- `sesionAdmin`: inicia sesión con las credenciales de demostración y utiliza `cy.session()` para reutilizar la autenticación.
- `abrirPanel`: utiliza la sesión administrativa, visita la aplicación y comprueba que el panel esté visible.

La sesión se identifica mediante `admin-grupo3`. También se verifica que la clave `sesion-grupo3` de `localStorage` contenga el valor `activa`.

### Beneficios

- Disminuye la repetición de código.
- Facilita el mantenimiento de las pruebas.
- Reutiliza el proceso de autenticación.
- Permite concentrarse en las funcionalidades que se desean evaluar.

### Evidencia de implementación

Archivo: `cypress/support/commands.js`.

Las pruebas que utilizan los comandos personalizados se encuentran en `cypress/e2e/tablero.cy.js`.

**Captura pendiente:** código de los comandos personalizados y resultado aprobado de Cypress.

## 3. Tema 2: Reportes Mochawesome y badge de GitHub Actions

### ¿En qué consisten?

Mochawesome es una herramienta de generación de reportes de pruebas basada en Mocha. Permite presentar los resultados en archivos HTML y JSON, facilitando la identificación de pruebas aprobadas, fallidas y sus detalles.

GitHub Actions permite automatizar la ejecución de pruebas cuando se realizan cambios en el repositorio. Un badge de estado muestra visualmente si el flujo de trabajo está funcionando o presenta fallas.

### Aplicación en nuestro proyecto

En el archivo `cypress.config.js` se configuró Mochawesome como reporter, utilizando las opciones siguientes:

- `reportDir: "cypress/reports"`
- `overwrite: false`
- `html: true`
- `json: true`

En `.github/workflows/cypress.yml` se implementó la ejecución automatizada de Cypress para los eventos `push` y `pull_request`.

El flujo también utiliza `actions/upload-artifact` para conservar los videos, capturas y reportes generados.

El archivo `README.md` incluye un indicador del estado del workflow denominado `Pruebas Cypress`.

### Beneficios

- Presenta los resultados de forma más clara.
- Facilita la identificación de pruebas fallidas.
- Permite descargar evidencias del proceso de pruebas.
- Ayuda a verificar los cambios antes de integrarlos a la rama principal.
- Proporciona información visual sobre el estado del proyecto.

### Evidencia de implementación

Una ejecución confirmada de GitHub Actions es:

https://github.com/Colindres05/tablero-tareas-grupo3/actions/runs/40618467785

En esa ejecución se aprobaron 9 pruebas, sin fallas, y se generó el artefacto `evidencia-cypress`.

**Capturas pendientes:** ejecución en verde, reporte Mochawesome, badge de estado y artefacto descargado.

## 4. Resultados

La aplicación cuenta con pruebas de autenticación, creación de tareas, cambios de estado, filtros, validación de título, eliminación y persistencia.

Las pruebas guiadas por datos utilizan el archivo `cypress/fixtures/casos-tareas.json` y un recorrido con `forEach`.

La integración con GitHub Actions permite ejecutar las pruebas automáticamente al subir cambios al repositorio o abrir Pull Requests.

## 5. Conclusiones

La implementación de comandos personalizados y reutilización de sesiones permitió organizar mejor el código de las pruebas y reducir la repetición de acciones de autenticación.

La integración de Mochawesome y GitHub Actions proporciona evidencias técnicas del funcionamiento de la aplicación y facilita la detección de errores.

Ambos temas fortalecen el proceso de aseguramiento de la calidad del Tablero de Tareas y ofrecen funcionalidades demostrables durante la exposición del proyecto final.

## 6. Fuentes consultadas

Cypress. (s. f.). *Custom Commands*. https://docs.cypress.io/api/cypress-api/custom-commands

Cypress. (s. f.). *cy.session()*. https://docs.cypress.io/api/commands/session

Cypress. (s. f.). *Reporters in Cypress*. https://docs.cypress.io/app/tooling/reporters

Gruber, A. (s. f.). *Mochawesome* [Repositorio de software]. GitHub. https://github.com/adamgruber/mochawesome

GitHub. (s. f.). *Adding a workflow status badge*. https://docs.github.com/en/actions/how-tos/monitor-workflows/add-a-status-badge
