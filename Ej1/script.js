// David Fernández Rodríguez
'use strict'

// Juego de zombies
// Estructura de datos: Objeto que almacena de cada jugador nombre, apellidos, nivel y puntuación

const jugador1 = {
  nombre: 'Juan',
  apellidos: 'Pérez',
  nivel: 1,
  puntuacion: 1
}

const jugador2 = {
  nombre: 'Ana',
  apellidos: 'García',
  nivel: 1,
  puntuacion: 1
}

console.log(jugador1)
console.log(jugador2)

// Array de jugadores
const jugadores = []

// Función que añade un jugador al array de jugadores
function addJugador(jugador) {
  jugadores.push(jugador)
}

addJugador(jugador1)
addJugador(jugador2)

// Función que suma puntos a un jugador si es alcanzado por un zombie, cada 10 puntos sube de nivel
function sumarPuntos(jugador) {
  jugador.puntuacion ++
  if (jugador.puntuacion % 10 === 0) {
    jugador.nivel++
  }
}

/* sumarPuntos(jugador1)
sumarPuntos(jugador1)
sumarPuntos(jugador1)
sumarPuntos(jugador1)
sumarPuntos(jugador1)
sumarPuntos(jugador1)
sumarPuntos(jugador1)
sumarPuntos(jugador1)
sumarPuntos(jugador1)
sumarPuntos(jugador1)
sumarPuntos(jugador1)
console.log(jugador1) */

// Función que resta 1 punto al jugador cuando es alcanzado por un zombie, cada 10 puntos perdidos, baja de nivel. Si la puntuación llega a 0 se reseteará el jugador
function restarPuntos(jugador) {
  jugador.puntuacion --
  if (jugador.puntuacion % 10 === 0) {
    jugador.nivel--
  }
  if (jugador.puntuacion === 0) {
    resetearJugador(jugador)
  }
}

//restarPuntos(jugador2)

// Función que resetea a un jugador cuando su puntuación llega a 0, muestra una alerta y elimina al jugador del array de jugadores
function resetearJugador(jugador) {
  jugador.puntuacion = 0
  jugador.nivel = 1
  alert(`El jugador ${jugador.nombre} ${jugador.apellidos} ha sido eliminado del juego`)
  // Eliminamos al jugador del array de jugadores
  jugadores.splice(jugadores.indexOf(jugador), 1)
}

console.log(jugadores)
