import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import Head from "next/head"
import Page from "../src/components/Page"
import SignUp from "../src/components/SignUp"

const signUp = () => {
  return (
    <Page>
      <Head>
        <title>Sign-up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header></Header>
      <SignUp></SignUp>

      <Footer></Footer>
    </Page>
  )
}
export default signUp
