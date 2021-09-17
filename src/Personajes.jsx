import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Personajes = ({nombre, nacionalidad, id}) => (
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">
                {nombre}
            </h3>
            <h4>Nacionalidad: </h4>
            <h5 className="card-title">
                {nacionalidad}
            </h5>
            <p><Link to={`/Personajes/${id}`}>Detalle</Link></p>
           
          
        </div>
    </div>
);

Personajes.propTypes = {
    nombre: PropTypes.string,

  
}

Personajes.defaultProps = {
    nombre: "no tiene nombre"
}

export default Personajes;