import Button from "./Button"
import Image from "next/image"
import cake_amandes_litchi from "../assets/images/cake_amandes_litchi.png"
import litchi2 from "../assets/images/litchi2.png"
import litchi3 from "../assets/images/litchi3.png"
import LiShopProduct from "./LiShopProduct"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import CounterShopProduct from "./CounterShopProduct"
import tropezienne from "../assets/images/tropezienne.png"
import cakeamandeslitchi from "../assets/images/cake_amandes_litchi.png"
import framboiseLaitAmandes from "../assets/images/framboise-lait-amandes.png"
import royalchocolat from "../assets/images/royal-chocolat.png"
import equinoxe from "../assets/images/equinoxe.png"
import tartecitron from "../assets/images/tarte-citron.png"
import tarteframboise from "../assets/images/tarte-framboise.png"
import lefraisevanille from "../assets/images/le-fraise-vanille.png"
import montblanc from "../assets/images/montblanc.png"
import Card from "./Card"
import AppContext from "./AppContext"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"

const ContentShopProduct = () => {
  const { api } = useContext(AppContext)
  const {
    query: { id },
  } = useRouter()
  const [product, setProduct] = useState()
  useEffect(() => {
    ;(async () => {
      const { data } = await api.get(`/product/${id}`)
      setProduct(data)
    })()
  }, [api, id])

  return (
    <div>
      <section className="">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="row">
                <div className="col-lg-10 m-auto tempaltemo-carousel">
                  <div className="row d-flex flex-row">
                    <div className="col-1 align-self-center">
                      <a
                        className="h1"
                        href="#multi-item-example"
                        role="button"
                        data-bs-slide="prev"
                      >
                        <span className="btn btn-success">
                          <FontAwesomeIcon icon={faChevronCircleLeft} />
                        </span>
                      </a>
                    </div>
                    <div className="col">
                      <div
                        className="carousel slide carousel-multi-item pt-2 pt-md-0"
                        id="multi-item-example"
                        data-bs-ride="carousel"
                      >
                        <div
                          className="carousel-inner product-links-wap"
                          role="listbox"
                        >
                          <div className="carousel-item active">
                            <div className="row">
                              <div className="card mb-3">
                                <Image
                                  className="card-img img-fluid"
                                  src={cake_amandes_litchi}
                                  width={500}
                                  height={500}
                                  alt="cake_amandes_litchi"
                                  id="product-detail"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row">
                              <div className="card mb-3">
                                <Image
                                  className="card-img img-fluid"
                                  src={litchi2}
                                  width={500}
                                  height={500}
                                  alt="cake_amandes_litchi"
                                  id="product-detail"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row">
                              <div className="card mb-3">
                                <Image
                                  className="card-img img-fluid"
                                  src={litchi3}
                                  width={500}
                                  height={500}
                                  alt="cake_amandes_litchi"
                                  id="product-detail"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 align-self-center">
                      <a
                        className="h1"
                        href="#multi-item-example"
                        role="button"
                        data-bs-slide="next"
                      >
                        <span className="btn btn-success">
                          <FontAwesomeIcon icon={faChevronCircleRight} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  {product ? (
                    <li key={product.id}>
                      <h1 className="modify-h2">{product.name}</h1>
                      <p>{product.price}</p>

                      <h6 className="modify-h6">Description:</h6>
                      <p className="modify-p">{product.description}</p>
                    </li>
                  ) : null}
                  <h6 className="modify-h6">CONSEILS DE DÉGUSTATION:</h6>
                  <ul className="list-unstyled pb-3">
                    <li className="modify-li">
                      Produit à conserver entre 0 et 3 °C
                    </li>
                    <li className="modify-li">
                      Il est préférable de sortir ce gâteau du réfrigérateur 30
                      min avant la dégustation.
                    </li>
                    <li className="modify-li">
                      Pour profiter pleinement des saveurs de nos pâtisseries
                      artisanales
                    </li>
                    <li className="modify-li">
                      nous vous recommandons de les déguster dans les 48h
                      suivant l’achat.
                    </li>
                  </ul>

                  <form className="container" action="" method="GET">
                    <input
                      type="hidden"
                      name="product-title"
                      value="Activewear"
                    />
                    <div className="row">
                      <div className="col-auto me-auto ">
                        <ul className="list-group list-group-horizontal pb-3">
                          <LiShopProduct>
                            Quantité
                            <input
                              type="hidden"
                              name="product-quanity"
                              id="product-quanity"
                              value="1"
                            />
                          </LiShopProduct>
                          <LiShopProduct>
                            <CounterShopProduct />
                          </LiShopProduct>
                        </ul>
                      </div>
                      <div className="col-auto me-auto">
                        <Button
                          type="submit"
                          className="btn btn-success btn-lg"
                          name="submit"
                        >
                          Ajouter au panier
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row text-left p-2 pb-3">
            <h4>Catalogue</h4>
          </div>
          <div
            id="template-mo-zay-hero-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row p-5">
                    <Card src={tropezienne}>Tropezienne</Card>
                    <Card src={cakeamandeslitchi}>Cake amandes litchi</Card>
                    <Card src={framboiseLaitAmandes}>
                      Framboise au lait d'amandes
                    </Card>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row p-5">
                    <Card src={royalchocolat}>Royal chocolat</Card>
                    <Card src={equinoxe}>Equinoxe</Card>
                    <Card src={tartecitron}>Tarte citron</Card>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row p-5">
                    <Card src={tarteframboise}>Tarte framboise</Card>
                    <Card src={lefraisevanille}>Le Fraise Vanille</Card>
                    <Card src={montblanc}>mont Blanc</Card>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev text-decoration-none w-auto mr-3"
              href="#template-mo-zay-hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <span className="btn btn-success mr-3">
                <FontAwesomeIcon icon={faChevronCircleLeft} />
              </span>
            </a>
            <a
              className="carousel-control-next text-decoration-none w-auto ml-3"
              href="#template-mo-zay-hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <span className="btn btn-success ml-3">
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContentShopProduct
