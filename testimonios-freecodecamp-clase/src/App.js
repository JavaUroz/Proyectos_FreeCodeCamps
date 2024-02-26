import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className='contenedor-principal'>
        <h1>Financiación para productores agropecuarios "Expoagro 2024"</h1>
        <Testimonio
          operacion='Financiación'
          tasa='0'
          imagen='Cestari'
          descripcion= 
            <span>
              <strong>7 Cheques de pago diferido, </strong>
              de 0 a 180 días. Propuesta válida para todas los modelos de tolvas.
            </span>
          empresa='Cestari' />
        <Testimonio
          operacion='Financiación'
          tasa='0'
          imagen='MacroAgro_Mesa de trabajo 1'
          descripcion=
            <span>
              <strong>Financiando el 70% del valor del bien (IVA incluido).</strong> Pueden acceder sólo productores agropecuarios con un stock de soja que no supere el 5% de su capacidad productiva.
            </span>
          empresa='MacroAgro' />
        </div>
      </div>
    );
  }
}

export default App;
