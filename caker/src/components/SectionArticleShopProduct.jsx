import Image from "next/image"

import tropezienne from "../assets/images/tropezienne.png"
import cake_amandes_litchi from "../assets/images/cake_amandes_litchi.png"
import framboiseLaitAmandes from "../assets/images/framboise-lait-amandes.png"
import Link from "next/link"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import royalchocolat from "../assets/images/royal-chocolat.png"
import equinoxe from "../assets/images/equinoxe.png"
import tartecitron from "../assets/images/tarte-citron.png"

const Sectionarticleshopproduct = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-left p-2 pb-3">
          <h4>Catalogue</h4>
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
                      <div className="col-4 p-md-7">
                        <div className="p-2 pb-3">
                          <div className="product-wap card rounded-0">
                            <div className="card rounded-0">
                              <Image
                                className="card-img rounded-0 img-fluid"
                                src={tropezienne}
                                alt="Image Tropezienne"
                                width={500}
                                height={500}
                              />
                              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled">
                                  <Link href="/shop1">
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
                                Tropezienne
                              </a>
                              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-md-7">
                        <div className="p-2 pb-3">
                          <div className="product-wap card rounded-0">
                            <div className="card rounded-0">
                              <Image
                                className="card-img rounded-0 img-fluid"
                                src={framboiseLaitAmandes}
                                width={500}
                                height={500}
                                alt="Image FramboiseLaitAmandes"
                              />
                              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled">
                                  <Link href="/shop1">
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
                                href="shop1.html"
                                className="h3 text-decoration-none"
                              >
                                framboise lait amandes
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-md-7">
                        <div className="p-2 pb-3">
                          <div className="product-wap card rounded-0">
                            <div className="card rounded-0">
                              <Image
                                className="card-img rounded-0 img-fluid"
                                src={cake_amandes_litchi}
                                width={500}
                                height={500}
                                alt="Image FramboiseLaitAmandes"
                              />
                              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled">
                                  <Link href="/shop1">
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
                                href="shop1.html"
                                className="h3 text-decoration-none"
                              >
                                cake_amandes_litchi
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-4 p-md-7">
                        <div className="p-2 pb-3">
                          <div className="product-wap card rounded-0">
                            <div className="card rounded-0">
                              <Image
                                className="card-img rounded-0 img-fluid"
                                src={royalchocolat}
                                alt="Image Tropezienne"
                                width={500}
                                height={500}
                              />
                              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled">
                                  <Link href="/shop1">
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
                                Royal chocolat
                              </a>
                              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-md-7">
                        <div className="p-2 pb-3">
                          <div className="product-wap card rounded-0">
                            <div className="card rounded-0">
                              <Image
                                className="card-img rounded-0 img-fluid"
                                src={equinoxe}
                                width={500}
                                height={500}
                                alt="Image FramboiseLaitAmandes"
                              />
                              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled">
                                  <Link href="/shop1">
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
                                href="shop1.html"
                                className="h3 text-decoration-none"
                              >
                                Equinoxe
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-md-7">
                        <div className="p-2 pb-3">
                          <div className="product-wap card rounded-0">
                            <div className="card rounded-0">
                              <Image
                                className="card-img rounded-0 img-fluid"
                                src={tartecitron}
                                width={500}
                                height={500}
                                alt="Image FramboiseLaitAmandes"
                              />
                              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled">
                                  <Link href="/shop1">
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
                                href="shop1.html"
                                className="h3 text-decoration-none"
                              >
                                Tarte citron
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
    </section>
  )
}
export default Sectionarticleshopproduct
