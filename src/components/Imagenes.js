import React from 'react';
import '../../src/estilos.css';
import uvasImg from '../imagenes/uvas.jpg';
import vinedosImg from '../imagenes/vinedos.jpg';

export const Imagenes = () => {
    return (
        <div className='contenedor-de-imagenes'>
            <img
                src={vinedosImg}
                className='vinedos'
                alt='imagen2'
            />
            <img
                src={uvasImg}
                className='uvas'
                alt='imagen1'
            />
        </div>
    );
};
