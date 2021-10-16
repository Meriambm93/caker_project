import Button from "./Button"
import Image from "next/image"
import cake_amandes_litchi from "../assets/images/cake_amandes_litchi.png"
import litchi2 from "../assets/images/litchi2.png"
import litchi3 from "../assets/images/litchi3.png"

const Sectioncontentshopproduct = () => {
  return (
    <section className="bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <Image
                className="card-img img-fluid"
                src={cake_amandes_litchi}
                width={300}
                height={300}
                alt="cake_amandes_litchi"
                id="product-detail"
              />
            </div>
            <div className="row">
              <div
                id="multi-item-example"
                className="col-10 carousel slide carousel-multi-item"
                data-bs-ride="carousel"
              >
                <div
                  className="carousel-inner product-links-wap"
                  role="listbox"
                >
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-4">
                        <a href="#">
                          <Image
                            className="card-img img-fluid"
                            src={cake_amandes_litchi}
                            width={300}
                            height={300}
                            alt="Product Image cake_amandes_litchi"
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <Image
                            className="card-img img-fluid"
                            src={litchi2}
                            width={300}
                            height={300}
                            alt="Product Image cake_amandes_litchi_2"
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <Image
                            className="card-img img-fluid"
                            src={litchi3}
                            width={300}
                            height={300}
                            alt="Product Image "
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="h2">cake amandes litchi</h1>
                <p className="h3 py-2">25.00 €</p>

                <h6>Description:</h6>
                <p>
                  Le Cake litchi ou la rencontre entre un délicieux biscuit aux
                  amandes à la rose et des éclats de framboises et litchis. A
                  déguster accompagné d’une tasse de thé Ispahan pour un goûter
                  parfumé.
                </p>

                <h6>CONSEILS DE DÉGUSTATION:</h6>
                <ul className="list-unstyled pb-3">
                  <li>Produit à conserver entre 0 et 3 °C</li>
                  <li>
                    Il est préférable de sortir ce gâteau du réfrigérateur 30
                    min avant la dégustation.
                  </li>
                  <li>
                    Pour profiter pleinement des saveurs de nos pâtisseries
                    artisanales
                  </li>
                  <li>
                    nous vous recommandons de les déguster dans les 48h suivant
                    l’achat.
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
                        <li className="list-group-item border-0 text-right fs-4">
                          Quantity
                          <input
                            type="hidden"
                            name="product-quanity"
                            id="product-quanity"
                            value="1"
                          />
                        </li>
                        <li className="list-group-item border-0">
                          <span className="btn btn-success" id="btn-minus">
                            -
                          </span>
                        </li>
                        <li className="list-group-item border-0 fs-4">
                          <span className="badge bg-secondary" id="var-value">
                            1
                          </span>
                        </li>
                        <li className="list-group-item border-0">
                          <span className="btn btn-success" id="btn-plus">
                            +
                          </span>
                        </li>
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
  )
}
export default Sectioncontentshopproduct
