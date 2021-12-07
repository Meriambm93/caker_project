import Page from "../src/components/Page"
import AddNewShop from "../src/components/AddNewShop"
const addNewShop = () => {
  return (
    <Page title="addNewShop">
      <AddNewShop></AddNewShop>
    </Page>
  )
}
addNewShop.options = { private: true }

export default addNewShop
