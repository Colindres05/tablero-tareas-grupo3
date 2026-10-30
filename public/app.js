"use strict";
const CLAVE_TAREAS = "tablero-grupo3-tareas";
const ESTADOS = ["Pendiente", "En progreso", "Hecha"];
let tareas = [];

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-login").addEventListener("submit", iniciarSesion);
  document.getElementById("btn-salir").addEventListener("click", cerrarSesion);
  document.getElementById("form-tarea").addEventListener("submit", agregarTarea);
  document.getElementById("filtro").addEventListener("change", renderizar);
  cargarTareas();
  if (localStorage.getItem("sesion-grupo3") === "activa") mostrarPanel();
  renderizar();
});
function mostrarPanel() {
  document.getElementById("login").classList.add("oculto");
  document.getElementById("panel").classList.remove("oculto");
}
function iniciarSesion(evento) {
  evento.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value;
  const mensaje = document.getElementById("login-msg");
  if (usuario !== "admin" || clave !== "admin123") {
    mensaje.textContent = "Usuario o contraseña incorrectos.";
    return;
  }
  mensaje.textContent = "";
  localStorage.setItem("sesion-grupo3", "activa");
  mostrarPanel();
}
function cerrarSesion() {
  localStorage.removeItem("sesion-grupo3");
  document.getElementById("panel").classList.add("oculto");
  document.getElementById("login").classList.remove("oculto");
  document.getElementById("form-login").reset();
}
function cargarTareas() {
  try {
    const valor = JSON.parse(localStorage.getItem(CLAVE_TAREAS) || "[]");
    tareas = Array.isArray(valor) ? valor.filter(t => t && typeof t.titulo === "string" && ESTADOS.includes(t.estado)) : [];
  } catch (_) { tareas = []; }
}
function guardarTareas() { localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas)); }
function agregarTarea(evento) {
  evento.preventDefault();
  const titulo = document.getElementById("titulo").value.trim();
  const estado = document.getElementById("estado").value;
  const mensaje = document.getElementById("form-msg");
  //if (!titulo) { mensaje.textContent = "El título de la tarea es obligatorio."; return; }
  if (!ESTADOS.includes(estado)) { mensaje.textContent = "El estado seleccionado no es válido."; return; }
  tareas.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, titulo, estado });
  guardarTareas(); mensaje.textContent = "";
  document.getElementById("form-tarea").reset();
  renderizar();
}
function cambiarEstado(id, nuevoEstado) {
  if (!ESTADOS.includes(nuevoEstado)) return;
  const tarea = tareas.find(t => t.id === id);
  if (tarea) { tarea.estado = nuevoEstado; guardarTareas(); renderizar(); }
}
function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  guardarTareas(); renderizar();
}
function renderizar() {
  const filtro = document.getElementById("filtro").value;
  const visibles = tareas.filter(t => filtro === "Todas" || t.estado === filtro);
  document.getElementById("contador-total").textContent = String(visibles.length);
  document.getElementById("contador-pendiente").textContent = String(visibles.filter(t => t.estado === "Pendiente").length);
  document.getElementById("contador-progreso").textContent = String(visibles.filter(t => t.estado === "En progreso").length);
  document.getElementById("contador-hecha").textContent = String(visibles.filter(t => t.estado === "Hecha").length);
  const tbody = document.querySelector("#tabla-tareas tbody");
  tbody.replaceChildren();
  visibles.forEach(tarea => {
    const tr = document.createElement("tr"); tr.className = "fila-tarea";
    const titulo = document.createElement("td"); titulo.className = "col-titulo"; titulo.textContent = tarea.titulo;
    const estadoTd = document.createElement("td");
    const estadoSelect = document.createElement("select"); estadoSelect.className = "estado-tarea"; estadoSelect.setAttribute("aria-label", `Estado de ${tarea.titulo}`);
    ESTADOS.forEach(estado => { const opt = document.createElement("option"); opt.value = estado; opt.textContent = estado; estadoSelect.appendChild(opt); });
    estadoSelect.value = tarea.estado;
    estadoSelect.addEventListener("change", () => cambiarEstado(tarea.id, estadoSelect.value));
    estadoTd.appendChild(estadoSelect);
    const accion = document.createElement("td");
    const eliminar = document.createElement("button"); eliminar.className = "btn-eliminar"; eliminar.type = "button"; eliminar.textContent = "Eliminar"; eliminar.addEventListener("click", () => eliminarTarea(tarea.id));
    accion.appendChild(eliminar); tr.append(titulo, estadoTd, accion); tbody.appendChild(tr);
  });
  document.getElementById("sin-tareas").classList.toggle("oculto", visibles.length !== 0);
}
