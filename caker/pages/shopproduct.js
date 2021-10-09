import Head from 'next/head'
import Page from "../src/components/Page";

import Header from "../src/components/Header";
import SectionContentShopProduct from "../src/components/SectionContentShopProduct";
import SectionArticleShopProduct from "../src/components/SectionArticleShopProduct";
import Footer from "../src/components/Footer";




const shopproduct = () => {
  return (
    <Page>
      <Head>
        <title>ShopProduct</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <SectionContentShopProduct />
      <SectionArticleShopProduct />
      <Footer></Footer>
    </Page>
  )
};

export default shopproduct;