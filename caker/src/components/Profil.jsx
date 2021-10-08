import Link from "next/link"
import Image from "next/image"
import avatar from "../assets/images/avatar.jpg"

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
                <h2>Mon Profil</h2>
              </a>

              <Link href="/">
                <a
                  className="deco list-group-item list-group-item-action"
                  href="index.html"
                >
                  Se Déconnecter
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div
                className="tab-pane fade active show p-2"
                id="account-general"
              >
                <div className="card-body media align-items-center">
                  <Image
                    src={avatar}
                    width={90}
                    height={90}
                    alt="avatar"
                    className="d-block ui-w-80 "
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
                <div className="card-body bg-light">
                  <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="amandine"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="rose"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="patisserie@mail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Adresse</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="11 rue du chocolat"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Ville</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="paris"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Code postal</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="75006"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0623456789"
                    />
                  </div>
                </div>
                <h1> Modifier Mot de passe</h1>
                <div
                  className="tab-pane active show"
                  id="account-change-password"
                >
                  <div className="card-body pb-2 bg-light">
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
