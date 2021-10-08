const FormInput = (props) => {
  const { type, placeholder, ...otherProps } = props

  return (
    <div className="form-holder ">
      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        {...otherProps}
      />
    </div>
  )
}
export default FormInput
