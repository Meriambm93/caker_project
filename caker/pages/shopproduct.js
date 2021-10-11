import Page from "../src/components/Page"
import SectionContentShopProduct from "../src/components/SectionContentShopProduct"
import SectionArticleShopProduct from "../src/components/SectionArticleShopProduct"

const shopproduct = () => {
  return (
    <Page title="Shop Products">
      <SectionContentShopProduct />
      <SectionArticleShopProduct />
    </Page>
  )
}

export default shopproduct
