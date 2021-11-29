import "bootstrap/dist/css/bootstrap.css"
import "../styles/style.css"
import { AppContextProvider } from "../src/components/AppContext"

import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  }, [])

  return (
    <AppContextProvider privatePage={Component?.options?.private}>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
