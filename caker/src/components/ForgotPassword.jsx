import Link from "next/link"
import FormInput from "./FormInput"
import FormLabel from "./FormLabel"
import Button from "../../src/components/Button"

const ForgotPassword = () => {
  return (
    <div className="container light-style flex-grow-1 container-p-y ">
      <h3 className="font-weight-bold py-3 mb-4 text-warning">
        mot de passe oublié
      </h3>

      <div className="tab-pane active show" id="account-change-password">
        <div className="card-body pb-2 bg-light">
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
      <div className="text-right mt-5 mb-5">
        <Link href="signIn" passHref>
          <Button type="button">Sauvegarder</Button>
        </Link>
        &nbsp;
        <Link href="/" passHref>
          <Button type="button">Annuler</Button>
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword
