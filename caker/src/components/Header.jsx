import Link from "next/link"
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"
import { useContext } from "react"
import AppContext from "./AppContext"

const Header = () => {
  const { session } = useContext(AppContext)

  return (
    <div className="bg-light shadow">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/" passHref>
            <a className="navbar-brand text-success logo h1 align-self-center">
              <h1>CAKER</h1>
            </a>
          </Link>

          <div
            className="
            align-self-center
            collapse
            navbar-collapse
            flex-fill
            d-lg-flex
            justify-content-lg-between
          "
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <Link href="/" passHref>
                    <a className="nav-link">Accueil</a>
                  </Link>
                </li>
                {session ? (
                  <li className="nav-item">
                    <Link href="/profil" passhref>
                      <a className="nav-link">Profil</a>
                    </Link>
                  </li>
                ) : null}
                <li className="nav-item">
                  <Link href="/patissier" passHref>
                    <a className="nav-link">Trouver Mon Pâtissier</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/patisserie" passHref>
                    <a className="nav-link">Vends Tes Pâtisserie</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Button className="avatar btn btn-outline-primary btnCompte">
                <Link href="/signUp" passHref>
                  <a>s'inscrire</a>
                </Link>
              </Button>
              <Button className="avatar btn btn-outline-primary btnCompte">
                <Link href="/signIn" passHref>
                  <a>s'indentifier</a>
                </Link>
              </Button>
            </div>
            <Link href="/shoppingCart" passHref>
              <a className="nav-icon position-relative text-decoration-none">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-dark mr-8"
                />
                <span
                  className="
                  position-absolute
                  top-0
                  left-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-light
                  text-dark
                "
                ></span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div>
        {" "}
        <Button className="avatar btn btn-outline-primary btnCompte">
          <Link href="/signIn" passHref>
            <a> déconnecter</a>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Header
