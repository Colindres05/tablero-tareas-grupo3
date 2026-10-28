# Tablero de Tareas — Grupo 3 (UMG)

![Pruebas Cypress](https://github.com/USUARIO/REPOSITORIO/actions/workflows/cypress.yml/badge.svg)

Aplicación web académica con HTML, CSS y JavaScript. Usuario de demostración: `admin` / `admin123`. Usa `localStorage` para tareas y sesión (solo para la práctica, **no** apto para producción).

## Ejecutar

```powershell
npm.cmd install
npm.cmd start
```

Abre http://localhost:3000. En otra terminal:

```powershell
npx.cmd cypress run --browser electron
```

## Funciones

- Login correcto e incorrecto.
- Crear tareas y validar título obligatorio.
- Estados: Pendiente, En progreso, Hecha.
- Filtrar por estado; **todos los contadores reflejan solo las tareas visibles**.
- Cambiar estados y eliminar tareas.
- Datos persistentes en localStorage.

## Pruebas y temas investigados

- `cypress/e2e/tablero.cy.js`: pruebas de login, creación, cambios, filtros, validación y eliminación.
- `cypress/fixtures/casos-tareas.json`: pruebas guiadas por datos con `forEach`.
- `cypress/support/commands.js`: comandos personalizados y sesión reutilizable con `cy.session`.
- Mochawesome genera reportes HTML/JSON en `cypress/reports`.
- GitHub Actions corre en `push` y `pull_request`, sube videos, capturas y reportes.
- Actualiza `USUARIO/REPOSITORIO` en el badge una vez creado el repositorio.

## Equipo

| Integrante | Función | Nombre / usuario GitHub |
|---|---|---|
| 1 | Interfaz y lógica | Por completar |
| 2 | Cypress y fixtures | Por completar |
| 3 | CI, reportes y documentación | Por completar |

## Exposición y entrega

Se requieren al menos dos Pull Requests con revisiones y merges, una ejecución verde y otra roja con evidencias, informe UMG y una modificación en vivo. Ver `docs/PLAN-GRUPO3.md`.
