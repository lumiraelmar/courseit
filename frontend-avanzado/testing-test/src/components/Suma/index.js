import { useState } from "react";
function Suma() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sum, setSum] = useState(0);

  function handleValue1(e) {
    setValue1(e.target.valueAsNumber);
  }

  function handleValue2(e) {
    setValue2(e.target.valueAsNumber);
  }

  function handleSum() {
    setSum(value1 + value2);
  }

  return (
    <>
      <input type="number" onChange={handleValue1} />
      <input type="number" onChange={handleValue2} />
      <button onClick={handleSum}>Sumar</button>
      <p>{sum}</p>
    </>
  );
}

export default Suma;