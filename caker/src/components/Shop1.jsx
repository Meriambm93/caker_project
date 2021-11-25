import shopImage from "../assets/images/tropezienne.png"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./Link"
import Card from "./Card"
import avatar from "../assets/images/avatar.jpg"
import Image from "next/dist/client/image"
import { useContext, useEffect, useState } from "react"
import AppContext from "./AppContext"

const ContentShop1 = () => {
  const { api } = useContext(AppContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get("/product", {
        params: { shop_id: 2 },
      })

      setProducts(data)
    })()
  }, [api])

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3 ">
          <h1 className="h2 pb-4">Ramirez</h1>
          <div className="accordion">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item bg-transparent border-0">
                <h2 className="accordion-header" id="headingOne">
                  <a
                    className="accordion"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <a className="orshop collapsed d-flex justify-content-between h3">
                      Voir le profil
                      <FontAwesomeIcon icon={faChevronCircleDown} />
                    </a>
                  </a>
                </h2>
              </div>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="collapse show list-unstyled pl-3">
                  <li>
                    <p className="profilshop">
                      Je m'appelle Ramirez, passionné par la pâtisserie je vous
                      propose mes gâteaux qui sont élaborés à partir de produits
                      de bonne qualité. n'hésitez pas à me contacter ,toutes les
                      garnitures et décors peuvent être modifiés sur demande...
                      alors n'hésitez plus... pas de livraison..... les
                      commandes sont a récupérer sur noisy-le-sec (93)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-transparent border-0">
              <h2 className="accordion-header" id="headingOne">
                <a
                  className="accordion bg-dark"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <a className="orshop collapsed d-flex justify-content-between h3 text-decoration-none">
                    Me contacter
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                  </a>
                </a>
              </h2>
            </div>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li className="text-decoration-none">
                  <p className="profilshop">ramirez@gmail.com</p>
                </li>
                <li>
                  <p className="profilshop">Whatsapp: 06.56.89.09.09</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="d-flex flex-wrap flex-row">
            {products.map((product) => (
              <Card src={shopImage} key={product} className="">
                {product.name}
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <hr />
        <div className="col-lg-3 mt-5">
          <h5>Commentaires client</h5>
          <h6 className="h6 pt-4">Évaluer ce patissier</h6>
          <Link href="/commentaire" className="btn btn-success text-white mt-2">
            Ecrire un commentaire
          </Link>
        </div>
        <div className="col-lg-9 mt-5">
          <div className="row">
            <h5 className="fs-5">Meilleures évaluations de France</h5>
            <div className="col-lg-1 mt-3">
              <Image
                src={avatar}
                width={30}
                height={30}
                alt="avatar"
                className="d-block ui-w-80 "
              />
            </div>
            <div className="col-lg-6">
              <h5 className="h5 fs-6 mt-3">client caker</h5>
              <p className="text-dark">Commenté en France le 6 octobre 2021</p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ipsum omnis cupiditate neque ea ut non distinctio culpa, itaque
                voluptate in voluptatum quibusdam unde reiciendis quos,
                voluptates quidem odio tempore?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 mt-3">
              <Image
                src={avatar}
                width={30}
                height={30}
                alt="avatar"
                className="d-block ui-w-80 "
              />
            </div>
            <div className="col-lg-6">
              <h5 className="h5 fs-6 mt-3">greg W</h5>
              <p className="text-dark">Commenté en France le 1 mars 2021</p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ipsum omnis cupiditate neque ea ut non distinctio culpa, itaque
                voluptate in voluptatum quibusdam unde reiciendis quos,
                voluptates quidem odio tempore?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentShop1
