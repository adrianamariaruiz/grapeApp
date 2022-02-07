import React from 'react';
import '../../src/estilos.css';
import iconClose from '../imagenes/icon-close.png';
import nicepage from '../imagenes/nicepage.png';
import desktop from '../imagenes/responsive-desktop.png';
import laptop from '../imagenes/responsive-laptop.png';
import tablet from '../imagenes/responsive-tablet.png';
import horizontalPhone from '../imagenes/responsive-phone-horizontal.png';
import phone from '../imagenes/responsive-phone.png';

export const Navbar = () => {
  return (

    <header>
      <img
        src={nicepage}
        className='nicepageLogo'
        alt='nicepage'
      />


      <div className='responsiveIcon'>
        <img
          src={desktop}
          className='desktop'
          alt='desktop'
        >
        </img>
        <img
          src={laptop}
          className='laptop'
          alt='laptop'
        >
        </img>
        <img
          src={tablet}
          className='tablet'
          alt='tablet'
        >
        </img>
        <img
          src={horizontalPhone}
          className='horizontalPhone'
          alt='horizontalPhone'
        >
        </img>
        <img
          src={phone}
          className='phone'
          alt='phone'
        >
        </img>
      </div>

      <img
        src={iconClose}
        className='X'
        alt='imagenX'
      />

    </header>


  )

};
