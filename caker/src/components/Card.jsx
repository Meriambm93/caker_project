import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./Link"
import Image from "next/dist/client/image"

const Card = (props) => {
  const { src, children, ...otherProps } = props

  return (
    <div className="col-md-4">
      <div className="card mb-4 product-wap rounded-0 mx-1">
        <div className="card rounded-0">
          <Image src={src} alt="image" {...otherProps} />
          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
            <ul className="list-unstyled">
              <li>
                <Link
                  href="shopproduct"
                  className="btn btn-success text-white mt-2"
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <a href="shop-product.html" className="h4 text-decoration-none">
            {children}
          </a>
        </div>
      </div>
    </div>
  )
}
export default Card
