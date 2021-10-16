import NextLink from "next/link"
const Link = (props) => {
  const { href, ...otherProps } = props

  return (
    <NextLink href={href}>
      <a className="btn btn-success text-white mt-2" {...otherProps} />
    </NextLink>
  )
}
export default Link
