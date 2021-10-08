import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import Head from "next/head"
import Page from "../src/components/Page"
import Shop1 from "../src/components/Shop1"

const shop1 = () => {
  return (
    <Page>
      <Head>
        <title>Shop1</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header></Header>
      <Shop1></Shop1>

      <Footer></Footer>
    </Page>
  )
}
export default shop1
