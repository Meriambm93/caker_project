import Page from "../src/components/Page"
import DashboardUsers from "../src/components/DashboardUsers"

const dashboardUsers = () => {
  return (
    <Page title="dashboardUsers" hideHeader hideFooter>
      <DashboardUsers></DashboardUsers>
    </Page>
  )
}
export default dashboardUsers
