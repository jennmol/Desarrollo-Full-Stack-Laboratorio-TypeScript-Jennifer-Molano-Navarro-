// Importar las clases
import { Persona } from './persona';
import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';

// Crear tres registros de persona
const persona1 = new Persona(
  'María',
  'Pacheco',
  23,
  '99622196M',
  new Date('1999-01-01'),
  'azul',
  'mujer',
  [new Direccion('Calle Rocafort', 4, 2, 'B', 08015, 'Barcelona', 'Barcelona')],
  [new Mail('personal', 'maria01@gmail.com')],
  [new Telefono('personal', 601125488)],
  'Notas de María'
);

const persona2 = new Persona(
  'Ana',
  'Gil',
  41,
  '21166323B',
  new Date('1980-21-11'),
  'verde',
  'mujer',
  [new Direccion('Calle Tallers', 1, 1, 'B', 08001, 'Barcelona', 'Barcelona')],
  [new Mail('personal', 'anagil@hotmail.com')],
  [new Telefono('personal', 633521557)],
  'Notas de Ana'
);

const persona3 = new Persona(
  'Juan',
  'Sánchez',
  46,
  '45678912C',
  new Date('1973-11-12'),
  'negro',
  'hombre',
  [new Direccion('Calle Santa Tecla', 21, 3, 'C', 08012, 'Tarragona', 'Tarragona')],
  [new Mail('personal', 'juansanchez@gmail.com')],
  [new Telefono('personal', 611248755)],
  'Notas de Juan'
);

// Mostrar los registros de persona en el terminal
console.log(persona1);
console.log(persona2);
console.log(persona3);

// Agrupar los registros de persona en un array
const registrosArray: Persona [] = [persona1, persona2, persona3]

// Modificar un registro de persona buscando su DNI
const nuevaMatriz = registrosArray
  .filter(Persona => Persona.getDni() === '45678912C')
  .map((persona) => {
    persona.setDirecciones([new Direccion('Calle Tarragona', 96, 6, 'A', 08014, 'Barcelona', 'Barcelona')]);
    persona.setMails([new Mail('personal', 'juansan19@hotmail.com')]);
    persona.setTelefonos([new Telefono('personal', 632115980)]);
    return persona;
  });

// Mostrar los tres registros de persona con los cambios realizados
console.log(nuevaMatriz);

