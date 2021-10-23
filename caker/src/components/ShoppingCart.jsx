import Image from "next/image"
import tarteFramboise from "../assets/images/tarte-framboise.png"
import fraiseVanille from "../assets/images/le-fraise-vanille.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import Counter from "./Counter"
const ShoppingCart = () => {
  return (
    <div>
      <div className="cartBody">
        <div className="CartContainer">
          <div className="headerCart">
            <h3 className="Heading">Panier</h3>
            <h5 className="Action">Supprimer Tout</h5>
          </div>

          <div className="Cart-Items">
            <div className="about">
              <h1 className="titleCard">Tarte Frambroise</h1>
              <Image
                src={tarteFramboise}
                alt="Image"
                width={200}
                height={200}
              />
            </div>
            <Counter />
            <div className="pricesCard">
              <div className="amount">30 €</div>

              <div className="remove">
                <FontAwesomeIcon icon={faTrash} className="text-light mr-8" />
                <span
                  className="
                  position-absolute
                  top-0
                  left-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-light
                  text-light
                "
                ></span>
              </div>
            </div>
          </div>
          <hr />
          <div className="Cart-Items pad">
            <div className="about">
              <h1 className="titleCard">Fraise Vanille</h1>
              <Image src={fraiseVanille} alt="Image" width={200} height={200} />
            </div>
            <Counter />
            <div className="pricesCard">
              <div className="amount">30 €</div>

              <div className="remove">
                <FontAwesomeIcon icon={faTrash} className="text-light mr-8" />
                <span
                  className="
                  position-absolute
                  top-0
                  left-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-light
                  text-light
                "
                ></span>
              </div>
            </div>
          </div>
          <hr />
          <div className="checkout">
            <div className="total">
              <div>
                <div className="Subtotal">Total</div>
                <div className="itemsCard">2 produits</div>
              </div>
              <div className="total-amount">60 €</div>
            </div>
            <button className="buttonCard">Payer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
