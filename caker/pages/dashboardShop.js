import Page from "../src/components/Page"
import DashboardShop from "../src/components/DashboardShop"

const dashboardShop = () => {
  return (
    <Page title="dashboard" hideHeader hideFooter>
      <DashboardShop />
    </Page>
  )
}

export default dashboardShop
