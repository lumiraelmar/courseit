import { useState } from "react";
function Test() {
  const [value, setValue] = useState({first: 0, second: 0});
  const [sum, setSum] = useState(0);

  function handleChange(e) {
    const { name, value } = e.target
    setValue((prevState) => {
      return {
        ...prevState,
        [name]: value
      } 
    })
  }

  function handleSum() {
    setSum(parseInt(value.first) + parseInt(value.second));
  }
  return (
    <>
      <input name='first' type="number" onChange={handleChange} id='first'/>
      <input name='second' type="number" onChange={handleChange} id='second'/>
      <button onClick={handleSum} id='sum-button'>Sumar</button>
      <p id='sum'>{sum}</p>
    </>
  );
}

export default Test;