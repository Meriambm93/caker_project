import Image from "next/image"
import cupCake from "../assets/images/cake.jpg"
import FormInput from "./FormInput"

const ContentSignUp = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="image-holder">
          <Image src={cupCake} alt="Image" className="img" />
        </div>
        <form action="">
          <h3>S'inscrire</h3>
          <FormInput type="text" placeholder="nom" />
          <FormInput type="text" placeholder="prenom" />
          <FormInput type="text" placeholder="e-mail" />
          <FormInput type="password" placeholder="mot de passe" />
          <FormInput type="password" placeholder="confirme mot de passe" />
          <div className="form-login">
            <button>Envoyer</button>
            <p className="fs-5">
              Vous avez déjà un compte ? <a href="sign-in.html">connexion</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ContentSignUp
