const FormLabel = (props) => {
  const { children, title, ...otherProps } = props

  return (
    <div className="form-label">
      <label {...otherProps} className="form-label form-v100">
        {title}
        {children}
      </label>
    </div>
  )
}
export default FormLabel
