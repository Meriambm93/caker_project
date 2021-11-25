import Button from "./Button"
import Image from "next/dist/client/image"
import ramirez from "../assets/images/ramirez.png"
import FormInput from "./FormInput"
import { Field, Formik } from "formik"
import { useCallback } from "react"
import * as yup from "yup"
import FormField from "./FormField"
import axios from "axios"
import { useRouter } from "next/router"

const validationSchema = yup.object().shape({
  name: yup.string().required().min(1).max(120),
  address: yup.string().min(1).required(),
  city: yup.string().min(1).max(120).required(),
  zipCode: yup.number().integer().min(1).required(),
  picture: yup.string().max(125),
})
const ContentShopPatissier = () => {
  const router = useRouter()
  const initialValues = {
    name: "",
    address: "",
    city: "",
    zipCode: "",
    picture: "",
    user_id: "",
  }
  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        await axios.post("http://localhost:5000/shop", {
          name: values.name,
          address: values.address,
          city: values.city,
          zipCode: values.zipCode,
          picture: values.picture,
          user_id: values.user_id,
        })
        actions.resetForm()
        alert("success!")
        router.push("/patissier")
      } catch (err) {
        actions.setErrors({ form: "une erreur" })
      }
    },
    [router],
  )

  return (
    <section className="bg-white">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title">Crée ma pâtisserie</h5>
              </div>
              <div className="card-body media align-items-center">
                <Image className="card-img img-fluid" src={ramirez} alt="" />
                <div className="media-body ml-4">
                  <label className="avatar btn btn-outline-primary">
                    modifier la photo
                    <Button
                      type="file"
                      className="account-settings-fileinput"
                    />
                  </label>
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card mx-3">
              <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={validationSchema}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} className="form-v100">
                    <div className="form-group mx-3">
                      <p>
                        <Field className="form-control d-block" name="name">
                          {({ field }) => (
                            <label>
                              Name <FormInput type="Name" {...field} />
                            </label>
                          )}
                        </Field>
                      </p>
                      <p>
                        <Field className="form-control d-block" name="address">
                          {({ field }) => (
                            <label>
                              Address <FormInput type="Address" {...field} />
                            </label>
                          )}
                        </Field>
                      </p>
                      <p>
                        <Field className="form-control d-block" name="city">
                          {({ field }) => (
                            <label>
                              City <FormInput type="City" {...field} />
                            </label>
                          )}
                        </Field>
                      </p>

                      <FormField
                        as={FormInput}
                        type="number"
                        pattern="[0-9]{5}"
                        placeholder="code postal"
                        name="zipCode"
                        min="1"
                        max="99999"
                        label="Code Postal"
                        className="form-control d-block"
                      />
                      <span className="text-danger">
                        * ces champs sont requis
                      </span>
                      <div className="form-login">
                        <Button type="submit" className="my-4">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContentShopPatissier
