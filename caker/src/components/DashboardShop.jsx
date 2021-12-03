import { faHome, faPowerOff, faTable } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./Link"
import { useCallback, useContext, useEffect, useState } from "react"
import AppContext from "./AppContext"

const DashboardShop = () => {
  const { api } = useContext(AppContext)
  const [shops, setShops] = useState([])
  const handleClickDelete = useCallback(
    async (event) => {
      const id = Number(event.target.getAttribute("data-id"))
      await api.delete(`/shop/${id}`)
      setShops(shops.filter((shop) => shop.id !== id))
    },
    [shops, api],
  )

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get("/shop")
      setShops(data)
    })()
  }, [api])

  return (
    <div>
      <div>
        <div className="area">
          <h3>Tableau de bord</h3>
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
              <a href="#">
                <FontAwesomeIcon icon={faTable} className="iconeDashboard2" />
                <i className="fa fa-table fa-2x"></i>
                <span className="nav-text">Tables</span>
              </a>
            </li>
          </ul>

          <ul className="logout">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="iconeDashboard3"
                />
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">Déconnexion</span>
              </a>
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
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Zip Code</th>
                <th scope="col">Picture</th>
                <th scope="col">User</th>
                <th scope="col">Ajouter</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {shops.map((shop) => (
                <tr className="colorDashb1" key={shop.id}>
                  <th scope="row">{shop.id}</th>
                  <td className="pe-3">{shop.name}</td>
                  <td>{shop.address}</td>
                  <td>{shop.city}</td>
                  <td>{shop.zipCode}</td>
                  <td>{shop.picture}</td>
                  <td>{shop.user.name}</td>

                  <td>
                    <button className="dashboardAdd">
                      <Link href="/shopPatissier">Ajouter</Link>
                    </button>
                  </td>
                  <td>
                    <button className="dashboardUp">
                      <Link href="">Modifier</Link>
                    </button>
                  </td>
                  <td>
                    <button
                      className="dashboardDelete"
                      onClick={handleClickDelete}
                      data-id={shop.id}
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

export default DashboardShop
