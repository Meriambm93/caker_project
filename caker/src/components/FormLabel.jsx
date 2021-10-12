const FormLabel = (props) => {
  const { children, ...otherProps } = props
  return (
    <div className="form-label">
      <label {...otherProps} className="form-label">
        {children}
      </label>
    </div>
  )
}
export default FormLabel
