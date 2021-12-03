import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Page = (props) => {
  const { title, hideHeader, hideFooter } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {hideHeader ? null : <Header />}

      <div {...props}></div>
      {hideFooter ? null : <Footer />}
    </>
  )
}

export default Page
