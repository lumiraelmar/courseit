import styles from '../../styles/Project.module.scss'

function Project({project}) {
  return (
    <>
      <p>{project.name}</p>
      <p>{project.desc}</p>
      <img src={project.img} />
    </>
  )
}

export default Project