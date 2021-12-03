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
import Image from "next/dist/client/image"
import montBlanc from "../assets/images/montblanc.png"

const WelcomeDashboard = () => {
  return (
    <div>
      <div>
        <div className="area container-p-y-5">
          <div className="row mt-4">
            <div className="welcome bg-white text-dark">
              <p className="welcomep text-left">
                <span>HELLO,</span>
              </p>
              <p className="text-center">
                Bienvenue dans <span>caker</span>
                <br />
                voulez-vous en savoir plus sur votre tableau de bord
              </p>
            </div>

            <div className=" text-center mt-4">
              <Image
                className=" rounded mx-auto d-block"
                src={montBlanc}
                alt="Image"
                width={300}
                height={300}
              />
            </div>
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
                    <FontAwesomeIcon
                      icon={faUser}
                      className="iconeDashboard3"
                    />
                    <i className="fa fa-table fa-2x"></i>
                    <span className="nav-text">Utilisateurs</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/dashboard" passHref>
                  <a>
                    <FontAwesomeIcon
                      icon={faTable}
                      className="iconeDashboard2"
                    />
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
      </div>
    </div>
  )
}

export default WelcomeDashboard
