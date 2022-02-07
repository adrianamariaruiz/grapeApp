import React from 'react';
import '../../src/estilos.css';
import { Imagenes } from './Imagenes';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Contenido = () => {

    return (
        <div className='contenedorPrincipal'>
            <Navbar />
            <Imagenes />

            <div className='contenidoInternoTituloSubParr'>
                <h1 className='titulo'>Growing grapes</h1>

                <h2 className='subtitulo'>in the home garden</h2>

                <p className='parrafo'>Do you want seedless grapes for fresh eating? Some seedless varieties are being grown in Minnesota now, but, except in far southern Minnesota, all of these varieties will need some winter protection.</p>

                <button
                    className='boton-learn-more'
                >
                    LEARN MORE
                </button>
            </div>



            <Footer />
        </div>
    );
};
