import { useRouter } from "next/router"
import { createContext, useEffect, useState } from "react"

import api from "../services/api"

const AppContext = createContext()

export const AppContextProvider = (props) => {
  const { privatePage } = props
  const [session, setSession] = useState(null)
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get("/session")

      setSession(data.session)

      if (privatePage && !data.session) {
        return router.push("/signIn")
      }
    })()
  }, [router, privatePage])

  if (session === null) {
    return "Loading..."
  }

  return <AppContext.Provider {...props} value={{ api, session }} />
}

export default AppContext
