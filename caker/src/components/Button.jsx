import classNames from "classnames"

const Button = (props) => {
  const { className, ...otherProps } = props

  return (
    <button
      className={classNames("avatar btn btn-outline-primary", className)}
      {...otherProps}
    />
  )
}

export default Button
