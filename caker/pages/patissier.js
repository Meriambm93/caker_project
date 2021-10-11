import ContainerPatissier from "../src/components/ContainerPatissier"
import SectionPatissier from "../src/components/SectionPatissier"
import Page from "../src/components/Page"

const patissier = () => {
  return (
    <Page title="Patissier">
      <ContainerPatissier />
      <SectionPatissier />
    </Page>
  )
}

export default patissier
