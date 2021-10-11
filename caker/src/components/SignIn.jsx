import Image from "next/image"
import vogue from "../assets/images/vogue.jpg"
import FormInput from "./FormInput"
import Button from "../../src/components/Button"
import Link from "next/link"

const SignIn = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="image-holder">
          <Image src={vogue} alt="" />
        </div>
        <form action="">
          <h3>S'identifier</h3>
          <FormInput type="text" placeholder="e-mail" />
          <FormInput type="password" placeholder="mot de passe" />
          <div className="form-login">
            <Button type="button">Connexion</Button>
            <p className="fs-6 ">
              Vous n'avez pas de compte ?{" "}
              <Link href="signUp" passHref>
                <a className="text-decoration-underline">Créez-le.</a>
              </Link>
            </p>
          </div>
          <br />
          <Link href="/forgottenPassword" passHref>
            <a className="text-decoration-underline m-3">
              Mot de passe oublié?
            </a>
          </Link>
        </form>
      </div>
    </div>
  )
}
export default SignIn
