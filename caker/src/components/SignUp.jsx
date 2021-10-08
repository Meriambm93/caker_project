import Image from "next/image"
import cupCake from "../assets/images/cake.jpg"

const ContentSignUp = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="image-holder">
          <Image src={cupCake} alt="Image" width={500} height={500} />
        </div>
        <form action="">
          <h3>S'inscrire</h3>

          <div className="form-holder ">
            <input type="text" placeholder="nom" className="form-control" />
          </div>
          <div className="form-holder active">
            <input type="text" placeholder="prenom" className="form-control" />
          </div>
          <div className="form-holder">
            <input type="text" placeholder="e-mail" className="form-control" />
          </div>
          <div className="form-holder">
            <input
              type="password"
              placeholder="mot de passe"
              className="form-control"
            />
          </div>
          <div className="form-holder">
            <input
              type="password"
              placeholder="confirmer le mot de passe"
              className="form-control"
            />
          </div>

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
