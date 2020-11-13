import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home({articles}) {
  return (
    articles.map((article, key) => {
      return(
        <Link href={`/articles/${article.id}`}>
          <section key={key} className={styles.articlesWrapper}>
            {article.cover_image &&
              <img src={article.cover_image} className={styles.coverImg}/>
            }
            
              <div className={styles.userInfo}>
                <img src={article.user.profile_image} className={styles.userImg}/>
                <p className={styles.userName}>{article.user.name}</p>
              </div>
            <div className={styles.articleInfo}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleDesc}>{article.description}</p>
              <div className={styles.footerWrapper}>
                <div className={styles.commentWrapper}>
                  {article.comments_count &&
                  <p className={styles.comments}>✎{article.comments_count}</p>}
                  {article.public_reactions_count &&
                  <p className={styles.reactions}>♡{article.public_reactions_count}</p>}
                </div>
                <ul className={styles.tagsWrapper}>
                  {(article.tag_list).map((tag, key) => {
                    return(
                      <li key={key} className={styles.tag}>#{tag}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </section>
        </Link>
      )
    })
  )
}

export async function getStaticProps() {
  const data = await fetch('https://dev.to/api/articles?tags=css,react&top=1');
  const json = await data.json();

  return{
    props: {
      articles: json
    },
    revalidate: 3600
  };
}