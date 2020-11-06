import styles from '../../styles/Button.module.scss'

function Button({onClick}) {
  return (
    <>
      <button onClick={onClick}>Search</button>
    </>
  )
}

export default  Button