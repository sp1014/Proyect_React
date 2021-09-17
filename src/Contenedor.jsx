import React  from 'react';
import Estudiante from './Estudiante';

const estudiantes = [
    {
        "id" : 1,
        "edad" : 23,
        "genero": "M",
        "grado": "10"
    },
    {
        "id" : 2,
        "nombre": "maria diaz",
        "edad" : 32,
        "genero": "F",
        "grado": "10"
    },
    {
        "id" : 3,
        "nombre": "pedro rey",
        "edad" : 12,
        "genero": "M",
        "grado": "10"
    },
    {
        "id" : 4,
        "nombre": "joe rodriguez",
        "edad" : 58,
        "genero": "M",
        "grado": "10"
    },
    {
        "id" : 5,
        "nombre": "carol roa",
        "edad" : 59,
        "genero": "F",
        "grado": "10"
    },
    {
        "id" : 6,
        "nombre": "luis torres",
        "edad" : 14,
        "genero": "M",
        "grado": "10"
    }
]

const Contenedor = () => (
    <>
         {
            estudiantes.map ( c => <Estudiante nombre = { c.nombre } edad = { c.edad } genero = { c.genero } id = {c.id}/>)
         }
    </>
);

export default Contenedor;