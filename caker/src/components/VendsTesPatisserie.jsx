import Button from "./Button"
import Image from "next/dist/client/image"
import cake from "../assets/images/cake.png"
import FormInput from "./FormInput"
const ContentVends = () => {
  return (
    <section className="bg-white">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title">Vends ta pâtisserie</h5>
              </div>
              <div className="card-body media align-items-center">
                <Image className="card-img img-fluid" src={cake} alt="" />
                <div className="media-body ml-4">
                  <label className="avatar btn btn-outline-primary">
                    modifier la photo
                    <Button
                      type="file"
                      className="account-settings-fileinput"
                    />
                  </label>
                  &nbsp;
                </div>
              </div>

              <div className="card-footer text-muted">
                <p>Ajoute jusqu'à 20 photos.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-1 align-self-center">
                <a
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i className="text-dark fas fa-chevron-left"></i>
                  <span className="sr-only">Previous</span>
                </a>
              </div>
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
                            src={cake}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <Image
                            className="card-img img-fluid"
                            src={cake}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <Image
                            className="card-img img-fluid"
                            src={cake}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 align-self-center">
                <a
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="next"
                >
                  <i className="text-dark fas fa-chevron-right"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5">
            <div className="card mx-3">
              <div className="form-group mx-3">
                <label className="form-label d-block">Titre</label>
                <FormInput
                  type="name"
                  className="form-control"
                  aria-describedby="name"
                  placeholder="ex: charlotte aux fraises"
                />
                <label className="form-label d-block">Prix</label>
                <FormInput
                  type="name"
                  className="form-control d-block"
                  aria-describedby="name"
                  placeholder=""
                />
                <label className="form-label d-block">
                  Décris ta pâtisserie
                </label>
                <FormInput
                  type="text"
                  className="form-control"
                  aria-describedby="text"
                  placeholder="ex: un biscuit imbibé de sirop de fraise"
                />
                <label className="form-label d-block">
                  Conseils de dégustation:
                </label>
                <FormInput
                  type="text"
                  className="form-control"
                  aria-describedby="text"
                  placeholder="ex: Produit à conserver entre 0 et 3 °C...."
                />
              </div>
              <FormInput
                type="hidden"
                name="product-title"
                value="Activewear"
              />
              <div className="row"></div>
              <div className="row pb-3">
                <div className="col-10 text-center ">
                  <Button type="submit" name="submit" value="buy">
                    Ajouter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContentVends
