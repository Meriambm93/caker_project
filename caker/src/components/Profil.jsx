const Profil = () => {
  return (
    <div className="container light-style flex-grow-1 container-p-y ">
      <h4 className="font-weight-bold py-3 mb-4 text-warning">Profil</h4>

      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a
                className="list-group-item list-group-item-action active"
                data-toggle="list"
                href="#account-general"
              >
                General
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-change-password"
              >
                Modifier Mot de passe
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-info"
              >
                Informations
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-social-links"
              >
                Réseaux Sociaux
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-connections"
              >
                Connections
              </a>
              <a
                className="deco list-group-item list-group-item-action"
                href="index.html"
              >
                Se Déconnecter
              </a>

              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-notifications"
              >
                Notifications
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="card-body media align-items-center">
                  <img
                    src="assets/img/avatar.jpg"
                    alt=""
                    className="d-block ui-w-80"
                  />
                  <div className="media-body ml-4">
                    <label className="avatar btn btn-outline-primary">
                      modifier la photo profil
                      <input
                        type="file"
                        className="account-settings-fileinput"
                      />
                    </label>{" "}
                    &nbsp;
                  </div>
                </div>
                <hr className="border-light m-0" />

                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value="nom"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      value="prenom"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value="patisserie@mail.com"
                    />
                    <div className="alert alert-warning mt-3">
                      Your email is not confirmed. Please check your inbox.
                      <br />
                      <a href="javascript:void(0)">Resend confirmation</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-change-password">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Mot de passe actuel</label>
                    <input type="password" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Nouveau Mot de passe</label>
                    <input type="password" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Répéter le nouveau mot de passe
                    </label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-info">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows="5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris nunc arcu, dignissim sit amet sollicitudin iaculis,
                      vehicula id urna. Sed luctus urna nunc. Donec fermentum,
                      magna sit amet rutrum pretium, turpis dolor molestie diam,
                      ut lacinia diam risus eleifend sapien. Curabitur ac nibh
                      nulla. Maecenas nec augue placerat, viverra tellus non,
                      pulvinar risus.
                    </textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Date d'anniversaire</label>
                    <input
                      type="text"
                      className="form-control"
                      value="07 avril 1987"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select className="custom-select">
                      <option selected="">France</option>
                      <option>Autres</option>
                    </select>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body pb-2">
                  <h6 className="mb-4">Contacts</h6>
                  <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input
                      type="text"
                      className="form-control"
                      value="0698765456"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">SiteWeb</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-social-links">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Twitter</label>
                    <input
                      type="text"
                      className="form-control"
                      value="https://twitter.com/user"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Facebook</label>
                    <input
                      type="text"
                      className="form-control"
                      value="https://www.facebook.com/user"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Google+</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instagram</label>
                    <input
                      type="text"
                      className="form-control"
                      value="https://www.instagram.com/user"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-connections">
                <div className="card-body">
                  <button type="button" className="btn btn-twitter">
                    Se connecter à <strong>Twitter</strong>
                  </button>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <h5 className="mb-2">
                    <a
                      href="javascript:void(0)"
                      className="float-right text-muted text-tiny"
                    >
                      <i className="ion ion-md-close"></i> Remove
                    </a>
                    <i className="ion ion-logo-google text-google"></i>
                    Vous êtes connecté à Google :
                  </h5>
                  patisserie@mail.com
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <button type="button" className="btn btn-facebook">
                    Se connecter à <strong>Facebook</strong>
                  </button>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <button type="button" className="btn btn-instagram">
                    Se connecter à <strong>Instagram</strong>
                  </button>
                </div>
              </div>
              <div className="tab-pane fade" id="account-notifications">
                <div className="card-body pb-2">
                  <h6 className="mb-4">Activity</h6>

                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input"
                        checked=""
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Email me when someone comments on my article
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input"
                        checked=""
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Email me when someone answers on my forum thread
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Email me when someone follows me
                      </span>
                    </label>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body pb-2">
                  <h6 className="mb-4">Application</h6>

                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input"
                        checked=""
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        News and announcements
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Weekly product updates
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input"
                        checked=""
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">Weekly blog digest</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right mt-5 mb-5">
        <button type="button" className="avatar btn btn-outline-primary">
          Sauvegarder
        </button>
        &nbsp;
        <button type="button" className="avatar btn btn-outline-primary">
          Annuler
        </button>
      </div>
    </div>
  )
}

export default Profil
