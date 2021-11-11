import React from "react"
import { Field } from "formik"

import ErrorFeedback from "./ErrorFeedback"

const FormField = (props) => {
  const { as: Component, name, ...otherProps } = props

  return (
    <Field name={name}>
      {({ field, meta: { error, touched } }) => (
        <>
          <Component {...field} {...otherProps} />
          {touched ? <ErrorFeedback>{error}</ErrorFeedback> : null}
        </>
      )}
    </Field>
  )
}

export default FormField
