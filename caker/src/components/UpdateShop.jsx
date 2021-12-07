import Button from "./Button"
import { Formik } from "formik"
import * as yup from "yup"
import { useCallback, useContext } from "react"
import FormField from "./FormField"
import FormInput from "./FormInput"
import { useEffect, useState } from "react"
import router, { useRouter } from "next/router"
import AppContext from "./AppContext"

const validationSchema = yup.object().shape({
  name: yup.string().required("Champ obligatoire").min(1).max(120),
  address: yup.string().min(1).required("Champ obligatoire"),
  city: yup.string().min(1).max(120).required("Champ obligatoire"),
  zipCode: yup.number().integer().min(1).required(),
  user_id: yup.number().integer().min(1).required("Champ obligatoire"),
})
const ContentShop = () => {
  const { api } = useContext(AppContext)
  const [shop, setShop] = useState(null)
  const {
    query: { id },
  } = useRouter()
  const initialValues = {
    name: shop?.name,
    address: shop?.address,
    city: shop?.city,
    zipCode: shop?.zipcode,
    user_id: shop?.user_id,
  }
  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        await api.put(`/shop/${id}`, {
          name: values.name,
          address: values.address,
          city: values.city,
          zipCode: values.zipcode,
          user_id: values.user_id,
        })
        alert("Shop Modifier")
        router.push("/dashboardShop")
        actions.resetForm()
      } catch (err) {
        actions.setErrors({ form: "une erreur" })
      }
    },
    [api, id],
  )
  useEffect(() => {
    ;(async () => {
      const { data } = await api.get(`/shop/${id}`)
      setShop(data)
    })()
  }, [api, id])

  return (
    <section className="bg-white">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-7 mt-5">
            <div className="card mx-3">
              <Formik
                enableReinitialize
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} className="form-v100">
                    {shop ? (
                      <div key={shop.id}>
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

                          <FormField
                            as={FormInput}
                            name="user_id"
                            value={shop.user.firstName}
                            label="Utilisateur"
                            className="border-gray d-block mb-3"
                          />
                        </div>
                        <div className="row pb-3">
                          <div className="col-10 text-center ">
                            <Button type="submit" name="submit">
                              Modifier
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : null}
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
export default ContentShop
