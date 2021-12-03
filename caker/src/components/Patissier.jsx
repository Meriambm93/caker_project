import ramirez from "../assets/images/ramirez.png"
import Image from "next/image"
import custom from "../assets/images/custom.png"
import { useContext, useEffect, useState } from "react"
import CardShopProduct from "./CardShopProduct"
import AppContext from "./AppContext"

const ContentPatissier = () => {
  const [shops, setShops] = useState([])
  const { api } = useContext(AppContext)

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get("/shop")

      setShops(data)
    })()
  }, [api])

  return (
    <div>
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
              {shops.map((shop) => (
                <CardShopProduct
                  href={`/user/${shop.user.id}/shop/${shop.id}`}
                  src={ramirez}
                  key={shop}
                  className=""
                >
                  <p>{shop.name}</p>
                  <p>{shop.city}</p>
                  <p>{shop.address}</p>
                </CardShopProduct>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="p-0">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">
                Trouvez le gâteau de vos rêves près de chez vous.
              </h1>
              <h2> Contactez le/la pâtissièr(e)</h2>
              <p>
                Échangez avec le/la pâtissièr(e) pour que vous puissiez définir
                ensemble de la date à laquelle le gâteau doit être prêt, et des
                éventuelles conditions.
              </p>
              <h2>Confirmez votre commande</h2>
              <p>
                Une fois les conditions validées avec le/la pâtissièr(e),
                confirmez votre commande par Whatsapp ou par email. Il ne vous
                reste plus qu’à récuperer vos gâteaux le jour J.
              </p>
            </div>
            <div className="row">
              <div className="col-12 p-md-5">
                <a href="#">
                  <Image
                    className="img-fluid brand-img"
                    src={custom}
                    alt="Brand Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContentPatissier

/*<CardShopProduct src={yummy}>
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
              </CardShopProduct>{" "}
              */
