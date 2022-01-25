
import '../src/index.css';
import vinedos from './imagenes/vinedos.jpg';
import uvas from './imagenes/uvas.jpg';


const App = () => {
  return (
    <div>
      <div className='container'>

        <div className='header'>nicepage</div>

        <div className='aside-left'>
          <img src={vinedos} className='vinedos' />
          <img src={uvas} className='uvas' />
        </div>

        <div className='aside-right'>
          <h1 className='titulo'>Growing grapes</h1>
          <h2>in the home garden</h2>
          <p>Do you want seedless grapes for fresh eating? Some seedless varieties are being grown in Minnesota now, but, except in far southern Minnesota, all of these varieties will need some winter protection.</p>
          <br />
          <button className='boton-learn-more'>
            LEARN MORE
          </button>
        </div>

        <div className='footer'>
          Template created with Nicepage.
        </div>

      </div>
    </div>
  );
}

export default App;
