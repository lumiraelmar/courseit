import Head from 'next/head'
import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import UserInfo from '../components/UserInfo'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState({});

  function handleChange(e) {
    setInputValue(e.target.value)
    // if (e.keycode == 'Enter') {
    //   handleClick()
    //   setInputValue('')
    // }
  }
  
  async function handleClick() {
    const data = await fetch(`https://api.github.com/users/${inputValue}`);
    const json = await data.json()

    const getProjects = await fetch('https://api.jsonbin.io/b/5f99f1e8857f4b5f9adf5a0e/3');
    const projectsJson = await getProjects.json()

    const userProjects = projectsJson.find((user) => user.name == inputValue)
    
    setData({
      githubData: json,
      projects: userProjects ? userProjects.projects : []
    })

    setInputValue('')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Github User Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Input onChange={handleChange} inputValue={inputValue} />
      <Button onClick={handleClick}/>
      {data.githubData &&
        <UserInfo img={data.githubData.avatar_url} name={data.githubData.name} desc={data.githubData.bio}/>
      }
      <Projects projects={data.projects}/>
    </div>
  )
}
