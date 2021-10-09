import Image from "next/image"
import ramirez from "../assets/images/ramirez.png"
import yummy from "../assets/images/yummy.png"
import kristen from "../assets/images/kristen.png"
import Link from "next/link"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContainerPatissier = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="h2 pb-4">Pâtissier</h1>
          <p>
            DES CRÉATIONS ANCRÉES DANS LA TRADITION ET TOURNÉES VERS LA
            MODERNITÉ
          </p>
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
                    src={ramirez}
                    className="card-img rounded-0 img-fluid"
                    alt="ramirez"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <Link href="/shop1" >
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop1.html"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </a>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    ramirez
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>Paris</li>
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
                  <p className="text-center mb-0">Day Dreams Cake Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <Image
                    src={yummy}
                    className="card-img rounded-0 img-fluid"
                    alt="yummy"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <Link href="/shop2">
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop_2.html"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </a>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Elisa
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>Paris 19 ème</li>
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
                  <p className="text-center mb-0">Bakery Elisa</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <Image
                    className="card-img rounded-0 img-fluid"
                    src={kristen}
                    alt="kristen"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <Link href="/shop3">
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop3.html"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </a>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Fatima
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>Noisy-le-sec</li>
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
                  <p className="text-center mb-0">Fatima Cupcakes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContainerPatissier

