import {
  faComment,
  faHome,
  faPowerOff,
  faStore,
  faTable,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./Link"
import { useCallback, useContext, useEffect, useState } from "react"
import AppContext from "./AppContext"

const DashboardUsers = () => {
  const { api } = useContext(AppContext)
  const [users, setUsers] = useState([])
  const handleClickDelete = useCallback(
    async (event) => {
      const id = Number(event.target.getAttribute("data-id"))
      await api.delete(`/user/${id}`)
      setUsers(users.filter((user) => user.id !== id))
    },
    [users, api],
  )

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get("/users")
      setUsers(data)
    })()
  }, [api])

  return (
    <div>
      <div>
        <div className="area">
          <h1 className="dashTitle text-center">Utilisateurs</h1>
        </div>
        <nav className="main-menu">
          <ul>
            <li>
              <Link href="/">
                <FontAwesomeIcon icon={faHome} className="iconeDashboard" />
                <i className="fa fa-home fa-2x"></i>
                <span className="nav-text">Accueil</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboardUsers" passHref>
                <a>
                  <FontAwesomeIcon icon={faUser} className="iconeDashboard3" />
                  <i className="fa fa-table fa-2x"></i>
                  <span className="nav-text">Utilisateurs</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/dashboard" passHref>
                <a>
                  <FontAwesomeIcon icon={faTable} className="iconeDashboard2" />
                  <i className="fa fa-table fa-2x"></i>
                  <span className="nav-text">Produits</span>
                </a>
              </Link>

              <li>
                <Link href="/dashboardComment" passHref>
                  <a>
                    <FontAwesomeIcon
                      icon={faStore}
                      className="iconeDashboard5"
                    />
                    <i className="fa fa-table fa-2x"></i>
                    <span className="nav-text">Boutiques</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dashboardComment" passHref>
                  <a>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="iconeDashboard4"
                    />
                    <i className="fa fa-table fa-2x"></i>
                    <span className="nav-text">Commentaires</span>
                  </a>
                </Link>
              </li>
            </li>
          </ul>
          <ul className="logout">
            <li>
              <Link href="/" passHref>
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="iconeDashboard3"
                />
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">Déconnexion</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="fondDashboard">
        {" "}
        <div className="tableDashboard">
          <table className="table">
            <thead className="thead-dark">
              <tr className="colorDash">
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Email</th>
                <th scope="col">Ajouter</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="colorDashb1" key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td className="pe-3">{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>

                  <td>
                    <button className="dashboardAdd">
                      <Link href="/signUp">Ajouter</Link>
                    </button>
                  </td>
                  <td>
                    <button className="dashboardUp">
                      <Link href="/profil">Modifier</Link>
                    </button>
                  </td>
                  <td>
                    <button
                      className="dashboardDelete"
                      onClick={handleClickDelete}
                      data-id={user.id}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardUsers
