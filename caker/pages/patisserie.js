import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import Page from "../src/components/Page"
import Head from "next/head"
import Patisserie from "../src/components/Patisserie"
import Main from "../src/components/Main"

const patisserie = () => {
  return (
    <Page>
      <Head>
        <title>Patisserie</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <Main></Main>
      <Patisserie></Patisserie>
      <Footer></Footer>
    </Page>
  )
}
export default patisserie
