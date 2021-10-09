
import Image from "next/image"
import tropezienne from "../assets/images/tropezienne.png"
import framboiseLaitAmandes from "../assets/images/framboise-lait-amandes.png"
import Link from "next/link"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Sectionarticleshopproduct = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-left p-2 pb-3">
          <h4>Catalogue</h4>
        </div>
        <div id="carousel-related-product">
          <div className="p-2 pb-3">
            <div className="product-wap card rounded-0">
              <div className="card rounded-0">
                <Image
                  className="card-img rounded-0 img-fluid"
                  src={tropezienne} alt="Image" width={500} height={500}
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <Link href="/shop1">
                      <a
                        className="btn btn-success text-white mt-2"
                        href="shop1.html"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </a>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <a href="shop-single.html" className="h3 text-decoration-none">
                  Tropezienne
                </a>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0"></ul>
              </div>
            </div>
          </div>

          <div className="p-2 pb-3">
            <div className="product-wap card rounded-0">
              <div className="card rounded-0">
                <Image 
                  className="card-img rounded-0 img-fluid"
                  src= {framboiseLaitAmandes} width={500} height={500}
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <Link href="/shop1">
                      <a
                        className="btn btn-success text-white mt-2"
                        href="shop1.html"
                      >
                      <FontAwesomeIcon icon={faEye} />  
                      </a>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <a href="shop1.html" className="h3 text-decoration-none">
                  framboise lait amandes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sectionarticleshopproduct;
