import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer className="bg" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="footer h2 text-success border-bottom pb-3 border-light logo">
              CAKER
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i>
                <Link
                  className="text-decoration-none"
                  href="https://google.fr/maps"
                >
                  123 Champs-Elysées Paris
                </Link>
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <Link className="text-decoration-none" href="tel:010-020-0340">
                  010-020-0340
                </Link>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <Link
                  className="text-decoration-none"
                  href="mailto:caker@company.com"
                >
                  caker@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="footer h2 text-success border-bottom pb-3 border-light">
              Vends,Commande Tes Pâtisserie
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <Link href="/patissier">
                  <a className="text-decoration-none">Trouver mon Pâtissier</a>
                </Link>
              </li>
              <li>
                <Link href="/patisserie">
                  <a className="text-decoration-none">vends tes Pâtisserie</a>
                </Link>
              </li>
              <li>
                <Link href="/profil">
                  <a className="text-decoration-none">Profil</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="footer h2 text-success border-bottom pb-3 border-light">
              Informations
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <Link className="text-decoration-none" href="/">
                  Accueil
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" href="patisserie">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" href="contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" href="signUp">
                  s'inscrire
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" href="signIn">
                  s'indentifier
                </Link>
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
                <Link
                  className="text-light text-decoration-none"
                  target="_blank"
                  passHref
                  href="http://facebook.com/"
                >
                  <a>
                    <FontAwesomeIcon icon={faFacebook} className="text-dark" />
                  </a>
                </Link>
              </li>
              <li
                className="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <Link
                  className="text-light text-decoration-none"
                  target="_blank"
                  passHref
                  href="https://www.instagram.com/"
                >
                  <a>
                    <FontAwesomeIcon icon={faInstagram} className="text-dark" />
                  </a>
                </Link>
              </li>
              <li
                className="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <Link
                  className="text-light text-decoration-none"
                  target="_blank"
                  passHref
                  href="https://twitter.com/"
                >
                  <a>
                    <FontAwesomeIcon icon={faTwitter} className="text-dark" />
                  </a>
                </Link>
              </li>
              <li
                className="
                  list-inline-item
                  border border-light
                  rounded-circle
                  text-center
                "
              >
                <Link
                  className="text-light text-decoration-none"
                  passHref
                  href="https://www.linkedin.com/"
                >
                  <a>
                    <FontAwesomeIcon icon={faLinkedin} className="text-dark" />
                  </a>
                </Link>
              </li>
            </ul>
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
