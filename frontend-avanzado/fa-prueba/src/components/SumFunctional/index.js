import React, {useState} from 'react';

function SumFunctional(){
  const [inputs, setInputs] = useState({num1: 0, num2: 0})
  const [result, setResult] = useState(0);
  const [arr, setArr] = useState(['Lu', 'Courseit'])

  function handleClick() {
    const { num1, num2 } = inputs
    setResult(+num1 + +num2)
  }

  function handleChange(e) {
    const { name, value } = e.target
    // Creamos una nueva variable para luego reemplazarla en nuestro estado
    const newState = {
      // Clonamos el puntero en memoria de nuestro estado actual y lo guardamos en nuestro nuevo objeto
      ...inputs,
      // Reemplazamos la propiedad `name` por la que tenia nuestro antiguo estado inputs
      //si existe propiedad lo pisa y si no existe lo crea
      [name]: value
    }
    // Sobre escribimos todo nuestro viejo estado con nuestra nueva variable
    setInputs(newState)
  }

  return(
    <>
      <input name='num1' type='number' onChange={handleChange}></input>
      <input name='num2' type='number' onChange={handleChange}></input>
      <button onClick={handleClick}>Sumar</button>
      <p>La suma es: {result}</p>
      
      {arr.map((val, key) => {
        return(
          <p key={key}>{val}</p>
        )
      })}
    </>
  )
}

export default SumFunctional

// function SumFunctional(){
//   const [num1, setNum1] = useState(0)
//   const [num2, setNum2] = useState(0)
//   const [result, setResult] = useState(0)

//   return(
//     <>
//       <input name='num1' type='number' onChange={(e) => setNum1(e.target.valueAsNumber)}></input>
//       <input name='num2' type='number' onChange={(e) => setNum2(e.target.valueAsNumber)}></input>
//       <button onClick={() => setResult(+num1 + +num2)}>Sumar</button>
//       <p>La suma es: {result}</p>
//     </>
//   )
// }

// export default SumFunctional