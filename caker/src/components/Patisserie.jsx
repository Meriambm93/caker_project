const Patisserie = () => {
  return (
    <main>
      <div className="container py-5 bg-danger">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Catégories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
                <a
                  className="or collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Trouver mon pâtissier
                  <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
                <ul className="collapse show list-unstyled pl-3">
                  <li>
                    <a
                      className="red text-decoration-none"
                      href="patissier.html"
                    >
                      Pâtissier
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pb-3">
                <a
                  className="or collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Vends tes Pâtisserie
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                  <li>
                    <a className="red text-decoration-none" href="#">
                      Vendre
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-12">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="text-center">
                          Commandez Vos Pâtisserie ou Vendez Vos Pâtisserie !
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12"></div>
                      <h2 className="white">COMMANDER</h2>
                    </div>
                    <p className="justify">
                      Vous fêtez votre anniversaire ou l'anniversaire d'un de
                      vos amis ou un événement personnel ou professionnel ? Le
                      coin des gourmandises vous propose de faire appel aux
                      amateurs ou professionnels de la pâtisserie , des gâteaux
                      sur mesure pour tous vos événements que vous ne trouvez
                      pas en boutique.Cliquer sur Trouver mon pâtissier
                    </p>

                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="white">VENDRE</h2>
                      </div>
                    </div>
                    <p className="justify">
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
              <p>
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
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/tarte-framboise.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/LE_CAKISSIME__TOUT_CROUSTILLANT.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/framboise-lait-amandes.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/le-fraise-vanille.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/roulerfraise.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/cake_amandes_litchi.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/rouler.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/echantillon.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/le-fraise-vanille.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/la-tarte-fraise.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/montblanc.png"
                                alt="Brand Logo"
                              ></img>
                            </a>
                          </div>
                          <div className="col-3 p-md-7">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="assets/img/mollycakefleur.png"
                                alt="Brand Logo"
                              ></img>
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
