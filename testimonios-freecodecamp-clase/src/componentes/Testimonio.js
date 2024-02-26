import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

class Testimonio extends React.Component {
  render() {
    return (
      <div className='contenedor-financiacion'>
        <img 
          className='imagen-financiacion'
          src={require(`../imagenes/Financiación ${this.props.imagen}.jpg`)}
          alt={(`Foto de ${this.props.operacion} ${this.props.empresa}`)} />
          <div className='contenedor-texto-financiacion'>
            <p className='nombre-financiacion'>
              <strong>{this.props.operacion}</strong> de {this.props.empresa}
            </p>
            <p className='tasa-financiacion'><strong>Tasa %{this.props.tasa} TNA</strong></p>
            <p className='descripcion-financiacion'>"{this.props.descripcion}"</p>
          </div>
      </div>
    );
  }
}

export default Testimonio;