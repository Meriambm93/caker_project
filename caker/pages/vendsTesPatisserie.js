import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import Head from "next/head"
import Page from "../src/components/Page"
import VendsTesPatisserie from "../src/components/VendsTesPatisserie"
const vendsTesPatisserie = () => {
  return (
    <Page>
      <Head>
        <title>Vends_Tes_Patisserie</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header></Header>
      <VendsTesPatisserie></VendsTesPatisserie>

      <Footer></Footer>
    </Page>
  )
}
export default vendsTesPatisserie
