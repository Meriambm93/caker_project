import { faHome, faPowerOff, faTable } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="area">
          <h3>Tableau de bord</h3>
        </div>
        <nav className="main-menu">
          <ul>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faHome} className="iconeDashboard" />
                <i className="fa fa-home fa-2x"></i>
                <span className="nav-text">Accueil</span>
              </a>
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
                <th scope="col">Prénom</th>
                <th scope="col">Nom</th>
                <th scope="col">Email</th>
                <th scope="col">Ajouter</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="colorDashb1">
                <th scope="row">1</th>
                <td>Mériam</td>
                <td>MB</td>
                <td>mb@gmail.com</td>
                <td>
                  <button className="dashboardAdd">Ajouter</button>
                </td>
                <td>
                  <button className="dashboardUp">Modifier</button>
                </td>
                <td>
                  <button className="dashboardDelete">Supprimer</button>
                </td>
              </tr>
              <tr className="colorDashb2">
                <th scope="row">2</th>
                <td>Abir</td>
                <td>AA</td>
                <td>abirA@gmail.com</td>
                <td>
                  <button className="dashboardAdd">Ajouter</button>
                </td>
                <td>
                  <button className="dashboardUp">Modifier</button>
                </td>
                <td>
                  <button className="dashboardDelete">Supprimer</button>
                </td>
              </tr>
              <tr className="colorDashb1">
                <th scope="row">3</th>
                <td>Youssef</td>
                <td>BOUG</td>
                <td>boug@gmail.fr</td>
                <td>
                  <button className="dashboardAdd">Ajouter</button>
                </td>
                <td>
                  <button className="dashboardUp">Modifier</button>
                </td>
                <td>
                  <button className="dashboardDelete">Supprimer</button>
                </td>
              </tr>
              <tr className="colorDashb2">
                <th scope="row">4</th>
                <td>Ignacio</td>
                <td>EE</td>
                <td>ignacioe@gmail.com</td>
                <td>
                  <button className="dashboardAdd">Ajouter</button>
                </td>
                <td>
                  <button className="dashboardUp">Modifier</button>
                </td>
                <td>
                  <button className="dashboardDelete">Supprimer</button>
                </td>
              </tr>
              <tr className="colorDashb1">
                <th scope="row">5</th>
                <td>Léa</td>
                <td>wW</td>
                <td>lea@gmail.fr</td>
                <td>
                  <button className="dashboardAdd">Ajouter</button>
                </td>
                <td>
                  <button className="dashboardUp">Modifier</button>
                </td>
                <td>
                  <button className="dashboardDelete">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
