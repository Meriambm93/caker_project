import Link from "next/link"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"
import { useCallback, useContext } from "react"
import AppContext from "./AppContext"
import router, { useRouter } from "next/router"

const Header = () => {
  const { session } = useContext(AppContext)
  const { api } = useContext(AppContext)
  const handleClickDisconnect = useCallback(async () => {
    await api.delete("/session")
    router.push("/signIn")
  }, [api])

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
              <ul className="nav navbar-nav d-flex justify-content-around mx-lg-auto">
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
                {session ? null : (
                  <li className="nav-item">
                    <Link href="/contact" passHref>
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                )}
                {(session && session.roleId === 2) || session.roleId === 1 ? (
                  <li className="nav-item">
                    <Link href="/shopPatissier" passHref>
                      <a className="nav-link">Créer Ma Boutique</a>
                    </Link>
                  </li>
                ) : null}
                {(session && session.roleId === 2) || session.roleId === 1 ? (
                  <li className="nav-item">
                    <Link href="/addNewProduct" passHref>
                      <a className="nav-link">Vends Tes Pâtisserie</a>
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
            {session ? null : (
              <div>
                <Button className="avatar btn btn-outline-primary btnCompte">
                  <Link href="/signUp" passHref>
                    <a>s'inscrire</a>
                  </Link>
                </Button>
                <Button className="avatar btn btn-outline-primary btnCompte p-1">
                  <Link href="/signIn" passHref>
                    <a>s'identifier</a>
                  </Link>
                </Button>
              </div>
            )}
            {session && session.roleId === 1 ? (
              <Button className="avatar btn btn-outline-primary btnCompte hDeco">
                <Link href="/welcomeDashboard" passHref>
                  <a className="nav-link">Admin</a>
                </Link>
              </Button>
            ) : null}
            {session ? (
              <Button
                onClick={handleClickDisconnect}
                className="avatar btn btn-outline-primary btnCompte hDeco"
              >
                <Link href="/" passHref>
                  <a>deconnexion</a>
                </Link>
              </Button>
            ) : null}
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
    </div>
  )
}

export default Header
