const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <a
          className="navbar-brand text-success logo h1 align-self-center"
          href="index.html"
        >
          Le Coin Des Gourmandises
        </a>

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
                <a className="nav-link" href="profil.html">
                  Profil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="patissier.html">
                  Trouver Mon Pâtissier
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="vends_tes_patisserie.html">
                  Vends Tes Pâtisserie
                </a>
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
