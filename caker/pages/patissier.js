import Header from "../src/components/Header";

import ContainerPatissier from "../src/components/ContainerPatissier";
import SectionPatissier from "../src/components/SectionPatissier";
import Footer from "../src/components/Footer";
import Page from "../src/components/Page"
import Head from 'next/head'


const patissier = () => {
  return (
    <Page>
      <Head>
        <title>Patissier</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <ContainerPatissier />
      <SectionPatissier />
      <Footer></Footer>
    </Page>
  )
};

export default patissier;
