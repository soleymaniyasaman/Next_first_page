import Navbar from '../components/navbar'
import '../styles/globals.css'
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from 'next/head'
import MainComponent from '../components/mainComponent'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <>
    <Head>

    </Head>
    <Navbar />
    <MainComponent />
    <Component {...pageProps} />
  </>
}

export default MyApp
