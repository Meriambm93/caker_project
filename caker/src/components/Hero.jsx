import Image from "next/image"
import framboiseLaitAmandes from "../assets/images/framboise-lait-amandes.png"
import mollyCake from "../assets/images/mollycakefleur.png"
import montBlanc from "../assets/images/montblanc.png"

const Hero = () => {
  return (
    <div
      id="template-mo-zay-hero-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <Image src={mollyCake} alt="Image" width={500} height={500} />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left align-self-center">
                  <h1 className="h1 text-success">
                    <b>Le Coin Des Gourmandises</b>
                    <span className="univers"> l'univers de la pâtisserie</span>
                  </h1>
                  <p>
                    Au menu des pâtissiers passionnés qui vendent leurs gâteaux
                    faits maison pour satisfaire les becs sucrés !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <Image src={montBlanc} alt="Image" width={500} height={500} />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1 text-success">
                    <b>Le principe est très simple et facile :</b>
                  </h1>
                  <p>
                    Connectez-vous à votre espace personnel, Utilisez votre
                    identifiant et votre mot de passe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <Image
                  src={framboiseLaitAmandes}
                  alt="Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <p> 1. Choisissez votre pâtissier</p>
                  <p> 2. Sélectionnez le modèle de votre gâteau</p>
                  <p> 3. Le paiement s'effectue sur place. </p>
                  <p> 4. Récupérez votre gâteau</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <i className="fas fa-chevron-left"></i>
      </a>
      <a
        className="carousel-control-next text-decoration-none w-auto pe-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  )
}

export default Hero
