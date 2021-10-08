import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import Page from "../src/components/Page"
import Head from "next/head"
import Contact from "../src/components/Contact"

const contact = () => {
  return (
    <Page>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <Contact></Contact>
      <Footer></Footer>
    </Page>
  )
}
export default contact
