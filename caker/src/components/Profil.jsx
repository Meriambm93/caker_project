import Link from "next/link"
import Image from "next/image"
import avatar from "../assets/images/avatar.jpg"
import FormInput from "./FormInput"
import FormLabel from "./FormLabel"
import Button from "../../src/components/Button"

const Profil = () => {
  return (
    <div className="container light-style flex-grow-1 container-p-y ">
      <h4 className="font-weight-bold py-3 mb-4 text-warning"> Mon Profil</h4>

      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <Link href="/" passHref>
                <a className="deco list-group-item">
                  <Button type="button">déconnexion</Button>
                </a>
              </Link>
            </div>
            <div className="list-group list-group-flush account-settings-links">
              <Link href="/deleteYourAccount" passHref>
                <a className="deco list-group-item">
                  <Button type="button">supprimer compte </Button>
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
                        className="account-settings-fileinput bg-transparent borde-0"
                      />
                    </label>{" "}
                    &nbsp;
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body bg-light">
                  <div className="form-group">
                    <FormLabel>Nom</FormLabel>
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="amandine"
                    />
                  </div>
                  <div className="form-group">
                    <FormLabel>Prénom</FormLabel>
                    <FormInput type="text" placeholder="rose" />
                  </div>
                  <div className="form-group">
                    <FormLabel>E-mail</FormLabel>
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="patisserie@mail.com"
                    />
                  </div>
                  <div className="form-group">
                    <FormLabel>Adresse</FormLabel>
                    <FormInput type="text" placeholder="11 rue du chocolat" />
                  </div>
                  <div className="form-group">
                    <FormLabel>Ville</FormLabel>
                    <FormInput type="text" placeholder="paris" />
                  </div>
                  <div className="form-group">
                    <FormLabel>Code postal</FormLabel>
                    <FormInput type="number" placeholder="75006" />
                  </div>
                  <div className="form-group">
                    <FormLabel>Téléphone</FormLabel>
                    <FormInput type="number" placeholder="0623456789" />
                  </div>
                </div>
                <h1 className="profil"> Modifier Mot de passe</h1>
                <div
                  className="tab-pane active show"
                  id="account-change-password"
                >
                  <div className="card-body pb-2 bg-light">
                    <div className="form-group">
                      <FormLabel>Mot de passe actuel</FormLabel>
                      <FormInput type="password" />
                    </div>
                    <div className="form-group">
                      <FormLabel>Nouveau Mot de passe</FormLabel>
                      <FormInput type="password" />
                    </div>

                    <div className="form-group">
                      <FormLabel>Répéter le nouveau mot de passe</FormLabel>
                      <FormInput type="password" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right mt-5 mb-5">
        <Link href="/" passHref>
          <Button type="button">Sauvegarder</Button>
        </Link>
        &nbsp;
        <Button type="button">Annuler</Button>
      </div>
    </div>
  )
}

export default Profil
