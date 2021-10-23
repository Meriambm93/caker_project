import ramirez from "../assets/images/ramirez.png"
import yummy from "../assets/images/yummy.png"
import kristen from "../assets/images/kristen.png"

import CardShopProduct from "./CardShopProduct"

const ContainerPatissier = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="h2 pb-4">Pâtissier</h1>
          <p>
            DES CRÉATIONS ANCRÉES DANS LA TRADITION ET TOURNÉES VERS LA
            MODERNITÉ
          </p>
        </div>

        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 pb-4">
              <div className="d-flex">
                <div className="col-md-8 pb-6"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <CardShopProduct src={ramirez}>
              ramirez
              <h6> Paris </h6>
              <h6>Day Dreams Cake Designer</h6>
            </CardShopProduct>
            <CardShopProduct src={yummy}>
              Elisa
              <h6>Paris 19 ème</h6>
              <h6>Bakery Elisa</h6>
            </CardShopProduct>
            <CardShopProduct src={kristen}>
              Fatima
              <h6>Noisy-le-sec</h6>
              <h6>Fatima Cupcakes</h6>
            </CardShopProduct>
          </div>
          <div className="row">
            <CardShopProduct src={ramirez}>
              ramirez
              <h6> Paris </h6>
              <h6>Day Dreams Cake Designer</h6>
            </CardShopProduct>
            <CardShopProduct src={yummy}>
              Elisa
              <h6>Paris 19 ème</h6>
              <h6>Bakery Elisa</h6>
            </CardShopProduct>
            <CardShopProduct src={kristen}>
              Fatima
              <h6>Noisy-le-sec</h6>
              <h6>Fatima Cupcakes</h6>
            </CardShopProduct>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContainerPatissier
