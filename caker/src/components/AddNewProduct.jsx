import Button from "./Button"
import { Formik } from "formik"
import * as yup from "yup"
import { useCallback, useContext } from "react"
import FormField from "./FormField"
import FormInput from "./FormInput"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import AppContext from "./AppContext"

const validationSchema = yup.object().shape({
  name: yup.string().required("Champ obligatoire").min(1).max(120),
  price: yup
    .number()
    .required("Champ obligatoire")
    .test(
      "maxDigitsAfterDecimal",
      "le champ numérique doit avoir 2 chiffres après la virgule ou moins",
      (number) => /^\d+(\.\d{1,2})?$/.test(number),
    )
    .min(1),
  description: yup.string().max(250),
  shop_id: yup.number().integer().min(1).required("Champ obligatoire"),
})
const AddNewProduct = () => {
  const { api } = useContext(AppContext)
  const router = useRouter()
  const initialValues = {
    name: "",
    price: "",
    description: "",
    advice: "",
    shop_id: "",
  }
  /*const handleFormSubmit = useCallback((values) => {
    console.log("submited", values)
  }, [])*/
  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        const {
          data: { id },
        } = await api.post("/product", {
          name: values.name,
          price: values.price,
          description: values.description,
          advice: values.advice,
          shop_id: values.shop_id,
        })
        actions.resetForm()
        router.push(`/patisserie/${id}/edit`)
      } catch (err) {
        actions.setErrors({ form: "une erreur" })
      }
    },
    [api, router],
  )
  const [shops, setShops] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get("/shop")

      setShops(data)
    })()
  }, [api])

  return (
    <section className="bg-white">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-9 mt-5">
            <h3>Ajouter un produit</h3>
            <div className="card mx-3">
              <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} className="form-v100">
                    <div className="form-group mx-3">
                      <FormField
                        as={FormInput}
                        label="Titre"
                        type="text"
                        name="name"
                        className="form-control d-block"
                        placeholder="ex: charlotte aux fraises"
                      />
                      <FormField
                        as={FormInput}
                        label="Prix"
                        name="price"
                        type="number"
                        min="0"
                        step=".01"
                        className="form-control d-block"
                        placeholder="Prix"
                        id="setPrice"
                        pattern="^\d*(\.\d{0,2})?$"
                      />
                      <FormField
                        as={(FormInput, "textarea")}
                        className="form-control fs-6"
                        rows="5"
                        type="text"
                        label="Décris ta pâtisserie"
                        name="description"
                        placeholder="ex:un biscuit imbibé de sirop de fraise"
                      />
                      <FormField
                        as={(FormInput, "textarea")}
                        className="form-control fs-6"
                        rows="5"
                        type="text"
                        label="Conseil de dégustation"
                        name="advice"
                        placeholder=" ex:produit à conserver entre 0 et 3 °C...."
                      />
                      <FormField
                        as={(FormInput, "select")}
                        name="shop_id"
                        label="Magasin"
                        className="form-select border-gray d-block mb-3"
                      >
                        <option selected>Ouvrir ce menu de magasin</option>
                        {shops.map(({ name, id }) => (
                          <option value={id} key={id}>
                            {name}
                          </option>
                        ))}
                      </FormField>
                    </div>
                    <div className="row pb-3">
                      <div className="col-10 text-center ">
                        <Button type="submit" name="submit">
                          Ajouter
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
export default AddNewProduct
