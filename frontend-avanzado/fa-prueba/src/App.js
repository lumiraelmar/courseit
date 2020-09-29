import React from 'react';
//import ClassComponent from './components/ClassComponent/index';
//import Hola from './components/Hola/index'
//import Carousel from './components/Carousel/index'
//import InputMirror from './components/InputMirror/index'
//import Sum from './components/Sum/index'
import SumFunctional from './components/SumFunctional/index'
import './App.css';

function App(props) {
  const hola = 'Hola CourseIt'
  return (
    <>
    <SumFunctional />
      {/* <Sum />
      <Hola hola={hola}/>
      <Hola hola={hola}/>
      <ClassComponent />
      <Hola hola={hola}/>
      <Hola hola={hola}/>
      <Carousel />
      <InputMirror /> */}
    </>
  );
}

export default App;
