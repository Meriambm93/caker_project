import Image from "next/image"
import custom from "../assets/images/custom.png"

const SectionPatissier = () => {
  return (
    <section className="bg-light py-5">
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
  )
}

export default SectionPatissier
