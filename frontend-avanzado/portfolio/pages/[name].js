import UserInfo from '../components/UserInfo'
import Projects from '../components/Projects'
//import styles from '../styles/User.module.scss'

export default function User({data, projects}) {
  
  return (
    <div >
      {data &&
        <UserInfo img={data.avatar_url} name={data.name} desc={data.bio}/>
      }
      <Projects projects={projects}/>
    </div>
  )
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  } 
}

export async function getStaticProps({params}) {
  const { name } = params
  const data = await fetch(`https://api.github.com/users/${name}`);
  const json = await data.json()

  const getProjects = await fetch('https://api.jsonbin.io/b/5f99f1e8857f4b5f9adf5a0e/3');
  const projectsJson = await getProjects.json()

  const userProjects = projectsJson.find((user) => user.name == name)

  return {
    props: {
      data: json,
      projects: userProjects ? userProjects.projects : []
    },
    revalidate: 3600 * 24
  }
}