function Input({onChange, value}) {
  return (
    <input type='test' onChange={(e) => onChange(e)} value={value} id='input'/>
  );
}

export default Input;