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
        <div className="area container-p-y">
          <h1 className="dashTitle text-center">Produits</h1>
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
                <Link href="/dashboardShop" passHref>
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
                <Link href="/dashboardcomment" passHref>
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
                <th scope="col">Prix</th>
                <th scope="col">Description</th>

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
                      <Link href={`product/${product.id}/updateProduct`}>
                        Modifier
                      </Link>
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
