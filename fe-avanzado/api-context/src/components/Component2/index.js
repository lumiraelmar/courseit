import React from 'react';
import Component3 from '../Component3';

class Component2 extends React.Component {
  render() {
    return (
      <div>
        <p>Componente 2</p>
        <Component3 />
      </div>
    );
  }
}

export default Component2;