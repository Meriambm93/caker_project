import Image from "next/image"
import shopImage from "../assets/images/tropezienne.png"
import shopImage1 from "../assets/images/cake_amandes_litchi.png"
import shopImage2 from "../assets/images/framboise-lait-amandes.png"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const ContentShop1 = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3 ">
          <br />
          <h1 className="h2 pb-4">Ramirez</h1>
          <div className="accordion">
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
                <a className="orshop collapsed d-flex justify-content-between h3 text-decoration-none">
                  Voir le profil
                  <FontAwesomeIcon icon={faChevronCircleDown} />
                  <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
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
              </li>
              <li className="pb-3">
                <a className="orshop collapsed d-flex justify-content-between h3 text-decoration-none">
                  Me conctater
                  <FontAwesomeIcon icon={faChevronCircleDown} />
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                  <li>
                    <p className="profilshop">ramirez@gmail.com</p>
                  </li>
                  <li>
                    <p className="profilshop">Whatsapp: 06.56.89.09.09</p>
                  </li>
                </ul>
              </li>
            </ul>
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
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <Image
                    className="card-img rounded-0 img-fluid"
                    src={shopImage}
                    alt="image"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-product.html"
                        >
                          <FontAwesomeIcon icon={faCartPlus} />

                          <i className="fas fa-cart-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-product.html"
                    className="h3 text-decoration-none"
                  >
                    Tropezienne
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li className="pt-2">
                      <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <Image
                    className="card-img rounded-0 img-fluid"
                    src={shopImage1}
                    alt="image"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-product-1.html"
                        >
                          <FontAwesomeIcon icon={faCartPlus} />

                          <i className="fas fa-cart-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-product-1.html"
                    className="h3 text-decoration-none"
                  >
                    Cake amandes litchi
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li className="pt-2">
                      <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <Image
                    className="card-img rounded-0 img-fluid"
                    src={shopImage2}
                    alt="image"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-product-2.html"
                        >
                          <FontAwesomeIcon icon={faCartPlus} />

                          <i className="fas fa-cart-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-product-2.html"
                    className="h3 text-decoration-none"
                  >
                    framboise au lait d'amandes
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li className="pt-2">
                      <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentShop1
