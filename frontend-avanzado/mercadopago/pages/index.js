import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loading && (
        <form action="https://localhost:3000/procesar-pago" method="POST">
          <p> hola</p>
          <script
            src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
            data-public-key="TEST-e8b0f090-0089-4037-9707-496bf3447e14"
            data-transaction-amount="100.00">
          </script>
        </form>
      )}
    </div>
  )
}
