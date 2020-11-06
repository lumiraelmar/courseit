import styles from '../../styles/UserInfo.module.scss'

function UserInfo({img, name, desc}) {
  return (
    <>
      <img src={img} />
      <h3>{name}</h3>
      <p>{desc}</p>
    </>
  )
}

export default UserInfo