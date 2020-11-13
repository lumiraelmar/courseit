import { useState } from 'react'
function Calculator() {
  const [values, setValues] = useState({});
  const [result, setResult] = useState(0);


  function handleChangeValue(e) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  function handleClick() {
    const {value1, value2} = values
    setResult(+value1 + +value2)
  }

  return (
    <>
      <div>
        <label>Value 1</label>
        <input name="value1" type="text" onChange={handleChangeValue} value={values.value1}/>
      </div>
      <div>
        <label>Value 2</label>
        <input name="value2" type="text" onChange={handleChangeValue} value={values.value2}/>
      </div>
      <div>
        <label>Result:</label>
        <div id="result">{result}</div>
      </div>
      <button id="calcButton" onClick={handleClick}>Calculate</button>
    </>
  )
}

export default Calculator