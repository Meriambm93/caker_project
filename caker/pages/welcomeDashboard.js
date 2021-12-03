import Page from "../src/components/Page"
import WelcomeDashboard from "../src/components/WelcomeDashboard"

const welcomeDashboard = () => {
  return (
    <Page title="welcomeDashboard" hideHeader hideFooter>
      <WelcomeDashboard></WelcomeDashboard>
    </Page>
  )
}
export default welcomeDashboard
