import Page from "../src/components/Page"
import AddNewProduct from "../src/components/AddNewProduct"
const addNewProduct = () => {
  return (
    <Page title="addNewProduct">
      <AddNewProduct></AddNewProduct>
    </Page>
  )
}
addNewProduct.options = { private: true }

export default addNewProduct
