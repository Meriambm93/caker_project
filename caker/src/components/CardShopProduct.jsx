import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./Link"
import Image from "next/dist/client/image"

const CardShopProduct = (props) => {
  const { src, children, ...otherProps } = props

  return (
    <div className="col-4 p-md-7">
      <div className="p-2 pb-3">
        <div className="product-wap card rounded-0">
          <div className="card rounded-0">
            <Image src={src} alt="image" {...otherProps} />
            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              <ul className="list-unstyled">
                <li>
                  <Link href="/shop1">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <a href="shop-single.html" className="h3 text-decoration-none">
              {children}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardShopProduct
