import React, {useState} from 'react';

function SumFunctional(){
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  return(
    <>
      <input type='number' onChange={(e) => setNum1(e.target.value)}></input>
      <input type='number' onChange={(e) => setNum2(e.target.value)}></input>
      <button onClick={() => setResult(parseInt(num1) + parseInt(num2))}>Sumar</button>
      <p>La suma es: {result}</p>
    </>
  )
}

export default SumFunctional