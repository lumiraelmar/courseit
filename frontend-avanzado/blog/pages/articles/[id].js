import styles from '../../styles/Home.module.scss'
import ReactMarkdown from 'react-markdown'

export default function Article({title, content, tags, cover}) {
  return(
    <div className={styles.articleWrapper}>
      {cover &&
        <img src={cover} />
      }
      <h3 className={styles.title}>{title}</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
      <ul className={styles.tagsWrapper}>
        {tags.map((tag, key) => {
          return(
            <li key={key} className={styles.tag}>#{tag}</li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getStaticPaths() {
const data = await fetch('https://dev.to/api/articles?tags=css,react&top=1');
const json = await data.json();

//const paths = json.map(path=> `/articulo/${path.id}`)
const paths = json.map((path) => {
  return `/articles/${path.id}`
})

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = await fetch(`https://dev.to/api/articles/${params.id}`);
  const json = await data.json();

  return {
    props: {
      cover: json.cover_image,
      title: json.title,
      content: json.body_markdown,
      tags: json.tags
    }
  }
}