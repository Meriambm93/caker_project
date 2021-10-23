import Image from "next/image"
import PatisserieCakeFramboise from "../assets/images/tarte-framboise.png"
import Cakeissime from "../assets/images/LE_CAKISSIME__TOUT_CROUSTILLANT.png"
import Framboiselait from "../assets/images/framboise-lait-amandes.png"
import Fraisevanille from "../assets/images/le-fraise-vanille.png"
import RoulerFraise from "../assets/images/roulerfraise.png"
import CakeA from "../assets/images/cake_amandes_litchi.png"
import Rouler from "../assets/images/rouler.png"
import Echantillon from "../assets/images/echantillon.png"
import Tartefraise from "../assets/images/la-tarte-fraise.png"
import Montblanc from "../assets/images/montblanc.png"
import Mollycakefleur from "../assets/images/mollycakefleur.png"
import {
  faCartPlus,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Patisserie = () => {
  return (
    <main>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h3 pb-4">Catégories</h1>
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
                      <a className="orshop collapsed d-flex justify-content-between h4 text-decoration-none">
                        Trouver mon patissier
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
                      <p>Patissier</p>
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
                    <a className="orshop collapsed d-flex justify-content-between h4 text-decoration-none">
                      Vends Tes Patisserie
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
                <p>Vendre</p>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-12">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center pb-4">
                          Commandez Vos Pâtisserie ou Vendez Vos Pâtisserie !
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12"></div>
                      <h4 className="white pb-4">COMMANDER</h4>
                    </div>
                    <p className="justifypat">
                      Vous fêtez votre anniversaire ou l'anniversaire d'un de
                      vos amis ou un événement personnel ou professionnel ? Le
                      coin des gourmandises vous propose de faire appel aux
                      amateurs ou professionnels de la pâtisserie , des gâteaux
                      sur mesure pour tous vos événements que vous ne trouvez
                      pas en boutique. Cliquer sur Trouver mon pâtissier
                    </p>

                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="white pb-4 pt-3">VENDRE</h4>
                      </div>
                    </div>
                    <p className="justifypat">
                      Pourquoi devenir pâtissière sur le coin des
                      Gourmandises,Vous pouvez vendre vos création de gâteaux
                      sur mesure, quels que soient vos thèmes et vos
                      envies...... Rejoignez un service de plus en plus
                      recherché. Une interface simple et intuitive. Complétez
                      vos revenus grâce à votre passion. Échangez directement
                      avec vos clients via Whatsapp et par email. Un abonnement
                      à prix attractif et sans engagement.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="danger h1">LOREM IPSUM</h1>
              <p className="justifypat text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">
                <div className="col-1 align-self-center">
                  <a
                    className="h1"
                    href="#multi-item-example"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <i className="text-light fas fa-chevron-left"></i>
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
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={PatisserieCakeFramboise}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={Cakeissime}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={Framboiselait}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={Fraisevanille}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={RoulerFraise}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={CakeA}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={Rouler}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={Echantillon}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={Fraisevanille}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={Tartefraise}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={Montblanc}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <Image
                                src={Mollycakefleur}
                                alt="Image"
                                width={500}
                                height={500}
                              />
                            </a>
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
                    <i className="text-light fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Patisserie
