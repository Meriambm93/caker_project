import Button from "./Button"
import Image from "next/dist/client/image"
import ramirez from "../assets/images/ramirez.png"
import FormInput from "./FormInput"
import { Formik } from "formik"
import { useContext, useCallback } from "react"
import * as yup from "yup"
import FormField from "./FormField"
import { useRouter } from "next/router"
import AppContext from "./AppContext"

const validationSchema = yup.object().shape({
  name: yup.string().required("Champ obligatoire").min(1).max(120),
  address: yup.string().min(1).required("Champ obligatoire"),
  city: yup.string().min(1).max(120).required("Champ obligatoire"),
  zipCode: yup.number().integer().min(1).required("Champ obligatoire"),
  picture: yup.string().max(125),
})
const ContentShopPatissier = () => {
  const { api } = useContext(AppContext)
  const router = useRouter()
  const initialValues = {
    name: "",
    address: "",
    city: "",
    zipCode: "",
    picture: "",
  }
  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        await api.post("/shop", {
          name: values.name,
          address: values.address,
          city: values.city,
          zipCode: values.zipCode,
          picture: values.picture,
        })
        router.push("/patissier")
      } catch (err) {
        actions.setErrors({ form: "une erreur" })
      }
    },
    [api, router],
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
                      <FormField
                        as={FormInput}
                        label="Name"
                        type="text"
                        name="name"
                        className="form-control d-block"
                        placeholder="ex: Lily"
                      />
                      <FormField
                        as={FormInput}
                        label="Address"
                        type="text"
                        name="address"
                        className="form-control d-block"
                        placeholder="ex: 09 rue de la paix "
                      />
                      <FormField
                        as={FormInput}
                        label="City"
                        type="text"
                        name="city"
                        className="form-control d-block"
                        placeholder="ex:77040 "
                      />
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
