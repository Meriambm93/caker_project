import Link from "next/link"
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FormInput from "./FormInput"

const Header = () => {
  return (
    <div className="bg-light shadow">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/">
            <a
              className="navbar-brand text-success logo h1 align-self-center"
              href="index.html"
            >
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
                  <a className="nav-link" href="index.html">
                    Accueil
                  </a>
                </li>
                <li className="nav-item">
                  <Link href="/profil">
                    <a className="nav-link" href="profil.html">
                      Profil
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/patissier">
                    <a className="nav-link" href="patissier.html">
                      Trouver Mon Pâtissier
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/patisserie">
                    <a className="nav-link" href="vends_tes_patisserie.html">
                      Vends Tes Pâtisserie
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3"></div>
            </div>
            <Link href="/signUp">
              <a
                className="nav-icon position-relative text-decoration-none"
                href="signUp.html"
              >
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
      <div className="row px-3 d-flex align-items-center">
        <div className="flex-sm-fill mb-1 w-25 pr-3 align-self-center">
          <div className="input-group">
            <FormInput
              type="text"
              id="inputMobileSearch"
              placeholder="Recherche"
            />
            <p className="input-group-text">
              <FontAwesomeIcon icon={faSearch} className="text-dark ml-5" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
