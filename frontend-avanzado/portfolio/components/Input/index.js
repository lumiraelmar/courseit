import styles from '../../styles/Input.module.scss'

function Input({onChange, inputValue}) {
  return (
    <>
      <input type='text' placeholder='Busca un usuario de github' onChange={(e) => onChange(e)} value={inputValue}/>
    </>
  )
}


export default Input