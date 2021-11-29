import { faHome, faPowerOff, faTable } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./Link"
import { useCallback, useContext, useEffect, useState } from "react"
import AppContext from "./AppContext"

const Dashboard = () => {
  const { api } = useContext(AppContext)
  const [products, setProducts] = useState([])
  const handleClickDelete = useCallback(
    async (event) => {
      const id = Number(event.target.getAttribute("data-id"))
      await api.delete(`/product/${id}`)
      setProducts(products.filter((product) => product.id !== id))
    },
    [products, api],
  )

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get("/product")
      setProducts(data)
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
                <th scope="col">Price</th>
                <th scope="col">Desctiption</th>
                <th scope="col">Magasin</th>
                <th scope="col">Ajouter</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="colorDashb1" key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td className="pe-3">{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.shop.name}</td>

                  <td>
                    <button className="dashboardAdd">
                      <Link href="/addNewProduct">Ajouter</Link>
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
                      data-id={product.id}
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

export default Dashboard
