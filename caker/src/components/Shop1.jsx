import shopImage from "../assets/images/tropezienne.png"
import shopImage1 from "../assets/images/cake_amandes_litchi.png"
import shopImage2 from "../assets/images/framboise-lait-amandes.png"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./Link"
import Card from "./Card"

const ContentShop1 = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3 ">
          <h1 className="h2 pb-4">Ramirez</h1>
          <div className="accordion">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <a
                    className="accordion"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <a className="orshop collapsed d-flex justify-content-between h3 text-decoration-none">
                      Voir le profil
                      <FontAwesomeIcon icon={faChevronCircleDown} />
                    </a>
                  </a>
                </h2>
              </div>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="collapse show list-unstyled pl-3">
                  <li>
                    <p className="profilshop">
                      Je m'appelle Ramirez, passionné par la pâtisserie je vous
                      propose mes gâteaux qui sont élaborés à partir de produits
                      de bonne qualité. n'hésitez pas à me contacter ,toutes les
                      garnitures et décors peuvent être modifiés sur demande...
                      alors n'hésitez plus... pas de livraison..... les
                      commandes sont a récupérer sur noisy-le-sec (93)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <a
                  className="accordion"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <a className="orshop collapsed d-flex justify-content-between h3 text-decoration-none">
                    Me conctater
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                  </a>
                </a>
              </h2>
            </div>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li className="text-decoration-none">
                  <p className="profilshop">ramirez@gmail.com</p>
                </li>
                <li>
                  <p className="profilshop">Whatsapp: 06.56.89.09.09</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 pb-4">
              <div className="d-flex">
                <div className="col-md-8 pb-6"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <Card src={shopImage}>Tropezienne</Card>
            <Card src={shopImage1}>Cake amandes litchi</Card>
            <Card src={shopImage2}>Framboise au lait d'amandes</Card>
          </div>
        </div>
      </div>
      <div className="row">
        <hr />
        <div className="col-lg-3 ">
          <h5>Commentaires client</h5>
          <h6 className="h6 pt-4">Évaluer ce patissier</h6>
          <Link href="/signIn">commentaire</Link>
        </div>
      </div>
    </div>
  )
}
export default ContentShop1
