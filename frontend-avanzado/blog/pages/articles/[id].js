import styles from '../../styles/Home.module.scss'
import ReactMarkdown from 'react-markdown'

export default function Article({title, content, tags}) {
  return(
    <div className={styles.articleWrapper}>
      <h3 className={styles.title}>{title}</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
      <ul>
        {tags.map((tag, key) => {
          return(
            <li key={key}>#{tag}</li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const data = await fetch(`https://dev.to/api/articles/${params.id}`);
  const json = await data.json();

  return {
    props: {
      title: json.title,
      content: json.body_markdown,
      tags: json.tags
    }
  }
}