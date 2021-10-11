import Link from "next/link"
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"

const Header = () => {
  return (
    <div className="bg-light shadow">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/" passHref>
            <a className="navbar-brand text-success logo h1 align-self-center">
              <h1>CAKER</h1>
            </a>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

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
                <li className="nav-item">
                  <Link href="/profil" passhref>
                    <a className="nav-link">Profil</a>
                  </Link>
                </li>
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

            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill"></div>
            </div>
            <Link href="/signUp" passHref>
              <a className="nav-icon position-relative text-decoration-none">
                <FontAwesomeIcon icon={faUser} className="text-dark mr-8" />
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
      <div className="d-flex justify-content-end px-5 input-group">
        <div className="form-outline">
          <input type="search" id="form1" className="form-control rounded-0" />
        </div>
        <Button>
          <FontAwesomeIcon icon={faSearch} className="text-dark" />
        </Button>
      </div>
    </div>
  )
}

export default Header
