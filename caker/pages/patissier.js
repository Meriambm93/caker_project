import Header from "../src/components/Header"
import ModalPatissier from "../src/components/ModalPatissier"
import ContainerPatissier from "../src/components/ContainerPatissier"
import SectionPatissier from "../src/components/SectionPatissier"
import Footer from "../src/components/Footer"
import Head from "next/head"

const patissier = () => {
  return (
    <page>
      <Head>
        <title>Patissier</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <ModalPatissier />
      <ContainerPatissier />
      <SectionPatissier />
      <Footer />
    </page>
  )
}

export default patissier