import React  from 'react';
import Personajes from './Personajes';

const personajes = [
   
    {
        "id": 1,
        "nombre": "Jett ",
        "nacionalidad": "Corea",
        "descripcion": "Jet es un personaje ágil y con un estilo de combate evasivo para poder tomar riesgos que otros no pueden. Puede correr en círculos alrededor de escaramuzas y cortar enemigos antes de que sepan quién ha sido.",
        "imagen" : "https://as01.epimg.net/meristation/imagenes/2020/03/02/noticias/1583161505_812522_1586249240_sumario_normal.jpg"
    
    },
    {
        "id":2,
        "nombre": "Viper",
        "nacionalidad": "USA",
        "descripcion": "Personaje con distintos dispositivos químicos que sirven para controlar el campo de batalla y mermar la visión de los enemigos",
        "imagen" : "https://as01.epimg.net/meristation/imagenes/2020/03/02/noticias/1583161505_812522_1586249260_sumario_normal.jpg"
    
    },
    {
        "id":3,
        "nombre": "Sova",
        "nacionalidad": "Rúsia",
        "descripcion": "Personaje que busca, encuentra y elimina enemigos al estilo ruso, con eficiencia y precisión.",
        "imagen" : "https://as01.epimg.net/meristation/imagenes/2020/03/02/noticias/1583161505_812522_1586249286_sumario_normal.jpg"
    
    },
    {
        "id":4,
        "nombre": "Cypher",
        "nacionalidad": "Marruecos",
        "descripcion": "Ningún secreto está a salvo de este personaje, que siempre está vigilante y controla cualquier movimiento enemigo.",
        "imagen" : "https://as01.epimg.net/meristation/imagenes/2020/03/02/noticias/1583161505_812522_1586249379_sumario_normal.jpg"
    
    },
    {
        "id":5,
        "nombre": "Brimstone",
        "nacionalidad": "USA",
        "descripcion": "Un personaje que tiene un gran arsenal para tomar ventaja en el campo de batalla y que sirve para dirigir al equipo hasta la victoria.",
        "imagen" : "https://as01.epimg.net/meristation/imagenes/2020/03/02/noticias/1583161505_812522_1586249463_sumario_normal.jpg"
    
    },
    {
        "id":6,
        "nombre": "Raze",
        "nacionalidad": "Brasil",
        "descripcion": "Estamos ante una agente de clase duelista que domina las armas explosivas y es perfecta para destrozar grupos de enemigos. Al inicio del juego, la tendremas bloqueada, para conseguirla podemos o activar contrato del agente o bien pagando 1000 puntos de Valorant. Cuenta con las siguientes habilidades:",
        "imagen" : "https://as01.epimg.net/meristation/imagenes/2020/04/07/noticias/1586258250_195920_1591185732_sumario_normal.jpg"
    
    },
    {
        "id":7,
        "nombre": "Omen",
        "nacionalidad": "Peru",
        "descripcion": "Un personaje que caza desde las sombras, con teleports y como si de un fantasma se tratara.",
        "imagen" : "https://as01.epimg.net/meristation/imagenes/2020/03/02/noticias/1583161505_812522_1586249521_sumario_normal.jpg"
    
    }
]


const ContenedorPesonajes = () => (
    <>
         {
             personajes.map ( c => <Personajes nombre = { c.nombre }  nacionalidad={ c.nacionalidad}  id={c.id} />)
         }
    </>
);

export default ContenedorPesonajes;