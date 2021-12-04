import { faHome, faPowerOff, faTable } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./Link"
import { useCallback, useContext, useEffect, useState } from "react"
import AppContext from "./AppContext"

const DashboardComment = () => {
  const { api } = useContext(AppContext)
  const [comments, setComments] = useState([])
  const handleClickDelete = useCallback(
    async (event) => {
      const id = Number(event.target.getAttribute("data-id"))
      await api.delete(`/comment/${id}`)
      setComments(comments.filter((comment) => comment.id !== id))
    },
    [comments, api],
  )

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get("/comment")
      setComments(data)
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
                <th scope="col">Message</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr className="colorDashb1" key={comment.id}>
                  <th scope="row">{comment.id}</th>
                  <td className="pe-3">{comment.message}</td>
                  <td>{comment.score}</td>

                  <td>
                    <button className="dashboardAdd">
                      <Link href="/commentaire">Ajouter</Link>
                    </button>
                  </td>
                  <td>
                    <button
                      className="dashboardDelete"
                      onClick={handleClickDelete}
                      data-id={comment.id}
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

export default DashboardComment
