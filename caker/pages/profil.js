import Page from "../src/components/Page"
import Profil from "../src/components/Profil"

const profil = () => {
  return (
    <Page title="Profil">
      <Profil></Profil>
    </Page>
  )
}
profil.options = { private: true }
export default profil
