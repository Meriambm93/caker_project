import Page from "../src/components/Page"
import Dashboard from "../src/components/Dashboard"

const dashboard = () => {
  return (
    <Page title="dashboard" hideHeader hideFooter>
      <Dashboard />
    </Page>
  )
}

export default dashboard
