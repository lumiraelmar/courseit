import '../styles/globals.css'
import App from 'next/app'
import { InfoProvider } from '../contexts/InfoContext'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <InfoProvider>
        <Component {...pageProps} />
      </InfoProvider>
    )
  }
}

export default MyApp
