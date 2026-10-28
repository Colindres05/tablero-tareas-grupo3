# Plan de trabajo Grupo 3 — Tablero de tareas

## Roles
1. **Interfaz y lógica**: página funcional, altas, cambios de estado y filtros.
2. **Pruebas**: pruebas Cypress, datos JSON, login correcto/incorrecto y documentación de casos.
3. **Integración**: GitHub Actions, reportes, badge, README, documentación UMG y exposición.

## Flujo de PR propuesto
1. Subir versión base comprobada a `main` (CI verde).
2. Crear rama `pr-1-pruebas`, ampliar un caso de prueba y abrir PR; revisar, capturar evidencia, hacer merge.
3. Crear rama `pr-2-validacion`, mejorar o reparar una regla de negocio y abrir PR; revisar y hacer merge.
4. Para demostrar CI rojo sin dejar `main` dañado, crear rama temporal `demo-rojo` que elimine la validación de título; push y abrir PR **sin mezclar**. Guardar Artifacts de la corrida roja y cerrar PR demostrativo después.
5. Registrar autores/fechas de commits y capturas de ambas revisiones.

## Temas extra
- Comandos personalizados con `Cypress.Commands.add` y caché con `cy.session`.
- Reportes Mochawesome y badge de workflow en README.

## Defensa de 15 minutos
- 0–2: problema, objetivos y arquitectura.
- 2–6: aplicación y regla de negocio.
- 6–9: Cypress, fixtures/forEach y caché de sesión.
- 9–12: Actions verde/rojo, reportes, capturas y PR.
- 12–15: modificación en vivo y preguntas.

## Lista de evidencias
- Cuatro o más pruebas, incluyendo login incorrecto y validación de título.
- Fixtures JSON con `forEach`.
- CI verde y rojo, Artifacts.
- Al menos dos PR revisados y fusionados.
- Informe de proyecto adaptado al formato oficial de UMG; acta de constitución del equipo si la solicita el docente.
