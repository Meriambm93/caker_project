const Footer = () => {
  return (
    <footer className="bg" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="footer h2 text-success border-bottom pb-3 border-light logo">
              Le Coin Des Gourmandises
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i>
                123 Champs-Elysées Paris
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="tel:010-020-0340">
                  010-020-0340
                </a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a
                  className="text-decoration-none"
                  href="mailto:info@company.com"
                >
                  lc-gourmandise@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="footer h2 text-light border-bottom pb-3 border-light">
              Vends,Commande Tes Pâtisserie
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <a className="text-decoration-none" href="patissier.html">
                  Trouver mon Pâtissier
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="vends_tes_patisserie.html"
                >
                  vends tes Pâtisserie
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="profil.html">
                  Profil
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="footer h2 text-light border-bottom pb-3 border-light">
              Informations
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <a className="text-decoration-none" href="index.html">
                  Accueil
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="patisserie.html">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="contact.html">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="sign-up.html">
                  s'inscrire
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="sign-in.html">
                  s'indentifier
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline text-left footer-icons">
              <li
                className="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="http://facebook.com/"
                >
                  <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                </a>
              </li>
              <li
                className="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  <i className="fab fa-instagram fa-lg fa-fw"></i>
                </a>
              </li>
              <li
                className="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://twitter.com/"
                >
                  <i className="fab fa-twitter fa-lg fa-fw"></i>
                </a>
              </li>
              <li
                className="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.linkedin.com/"
                >
                  <i className="fab fa-linkedin fa-lg fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <label className="sr-only" for="subscribeEmail">
              Email address
            </label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control bg-dark border-light"
                id="subscribeEmail"
                placeholder="Email address"
              />
              <div className="input-group-text btn-success text-light">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 bg-black py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-left text-light">
                Copyright &copy; 2021 Company Name | Designed by
                <a rel="sponsored" href="#" target="_blank">
                  Le Coin Des Gourmandises
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
