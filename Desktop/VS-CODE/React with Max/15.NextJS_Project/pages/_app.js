import '../styles/globals.css'
import Layout from '../components/layout/Layout'

// layout je to kde mas tu navabr a ty vlastne chces aby vsechno co je v te appce bylo obaleny tady timto a na kazde strance byla stejna navbar. takze misto toho abys to obalovala samostatne tam kde to potrebujes tak vlastne to muzes obalit jenom tady na jendom miste 

const MyApp = ({ Component, pageProps }) => {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
