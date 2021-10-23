import tropezienne from "../assets/images/tropezienne.png"
import cakeamandeslitchi from "../assets/images/cake_amandes_litchi.png"
import framboiseLaitAmandes from "../assets/images/framboise-lait-amandes.png"
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import royalchocolat from "../assets/images/royal-chocolat.png"
import equinoxe from "../assets/images/equinoxe.png"
import tartecitron from "../assets/images/tarte-citron.png"
import tarteframboise from "../assets/images/tarte-framboise.png"
import lefraisevanille from "../assets/images/le-fraise-vanille.png"
import montblanc from "../assets/images/montblanc.png"
import CardShopProduct from "./CardShopProduct"

const Sectionarticleshopproduct1 = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-left p-2 pb-3">
          <h4>Catalogue</h4>
        </div>
        <div
          id="template-mo-zay-hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row p-5">
                  <CardShopProduct src={tropezienne}>
                    Tropezienne
                  </CardShopProduct>
                  <CardShopProduct src={cakeamandeslitchi}>
                    Cake amandes litchi
                  </CardShopProduct>
                  <CardShopProduct src={framboiseLaitAmandes}>
                    Framboise au lait d'amandes
                  </CardShopProduct>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row p-5">
                  <CardShopProduct src={royalchocolat}>
                    Royal chocolat
                  </CardShopProduct>
                  <CardShopProduct src={equinoxe}>Equinoxe</CardShopProduct>
                  <CardShopProduct src={tartecitron}>
                    Tarte citron
                  </CardShopProduct>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row p-5">
                  <CardShopProduct src={tarteframboise}>
                    Tarte framboise
                  </CardShopProduct>
                  <CardShopProduct src={lefraisevanille}>
                    Le Fraise Vanille
                  </CardShopProduct>
                  <CardShopProduct src={montblanc}>mont Blanc</CardShopProduct>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev text-decoration-none w-auto mr-3"
            href="#template-mo-zay-hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span className="btn btn-success mr-3">
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>
          </a>
          <a
            className="carousel-control-next text-decoration-none w-auto ml-3"
            href="#template-mo-zay-hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span className="btn btn-success ml-3">
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
export default Sectionarticleshopproduct1
