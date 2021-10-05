import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import Page from "../src/components/Page"
import Head from "next/head"
import Profil from "../src/components/Profil"

const profil = () => {
  return (
    <Page>
      <Head>
        <title>Profil</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <Profil></Profil>
      <Footer></Footer>
    </Page>
  )
}
export default profil
