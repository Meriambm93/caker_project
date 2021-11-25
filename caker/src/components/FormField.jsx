import React from "react"
import { Field } from "formik"

import ErrorFeedback from "./ErrorFeedback"
import FormLabel from "./FormLabel"

const FormField = (props) => {
  const { as: Component, label, type, name, ...otherProps } = props
  const onChangeFile = (field, form) => (event) => {
    form.setFieldValue(name, event.target.files[0])
  }

  return (
    <FormLabel title={label}>
      <Field name={name}>
        {({ field, meta: { error, touched }, form }) =>
          type == "file" ? (
            <Component
              type={type}
              {...otherProps}
              onChange={onChangeFile(field, form)}
            />
          ) : (
            <>
              <Component type={type} {...field} {...otherProps} />
              {touched ? <ErrorFeedback>{error}</ErrorFeedback> : null}
            </>
          )
        }
      </Field>
    </FormLabel>
  )
}

export default FormField
