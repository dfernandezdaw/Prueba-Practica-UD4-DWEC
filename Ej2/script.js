// David Fernández Rodríguez
'use strict'

function isLeapYear(year1, year2) {
  let years = []
  if (typeof year1 === 'number' && typeof year2 === 'number') {
    // Truncamos los números por si son decimales
    year1 = Math.trunc(year1)
    year2 = Math.trunc(year2)
    // Comprobamos que los años están entre 2001 y 2500
    if (year1 >= 2001 && year1 <= 2500 && year2 >= 2001 && year2 <= 2500) {
      // Comprobamos que el año 1 es menor que el año 2
      if (year1 < year2) {
        // Recorremos los años entre el año 1 y el año 2
        for (let i = year1; i <= year2; i++) {
          // Comprobamos si el año es bisiesto y lo añadimos al array
          if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
            years.push(i)
          }
        }
      } else {
        return 'El año 1 debe ser menor que el año 2 para poder calcular el número de años bisiestos entre ambos años'
      }
    } else {
      return 'Los años deben ser números y estar comprendidos entre 2001 y 2500'
    }
  }
  if (years.length < 1) {
    return 'No hay años bisiestos entre los dos años'
  } else {
    // Devolvemos los años bisiestos separados por coma
    return years.join(', ')
  }
}

console.log(isLeapYear(2001, 2008))

// Muestra los años bisiestos y los escribe en p
document.querySelector('p').textContent = isLeapYear(2001.9, 2008.7)
