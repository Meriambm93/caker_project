const LiShopProduct = (props) => {
  const { children, ...otherPors } = props

  return (
    <ul className="list-group" {...otherPors}>
      <li className="list-group-item border-0 fs-4">{children}</li>
    </ul>
  )
}
export default LiShopProduct
