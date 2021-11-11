import classNames from "classnames"

const ErrorFeedback = (props) => {
  const { children, className, ...otherProps } = props

  if (!children) {
    return null
  }

  return (
    <span
      {...otherProps}
      className={classNames("block text-danger font-bold", className)}
    >
      {children}
    </span>
  )
}

export default ErrorFeedback
