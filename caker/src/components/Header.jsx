import Link from "next/link"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/">
          <a
            className="navbar-brand text-success logo h1 align-self-center"
            href="index.html"
          >
            Le Coin Des Gourmandises
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
                  <a className="nav-link fs-4" href="profil.html">
                    Profil
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/patissier">
                  <a className="nav-link fs-4" href="patissier.html">
                    Trouver Mon Pâtissier
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/patisserie">
                  <a className="nav-link fs-4" href="vends_tes_patisserie.html">
                    Vends Tes Pâtisserie
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">
            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3"></div>
          </div>

          <a
            className="nav-icon position-relative text-decoration-none"
            href="sign-in.html"
          >
            <i className="fa fa-fw fa-user text-dark mr-8"></i>
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
        </div>
      </div>
    </nav>
  )
}

export default Header
