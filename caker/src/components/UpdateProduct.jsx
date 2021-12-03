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
  price: yup
    .number()
    .required("Champ obligatoire")
    .test(
      "maxDigitsAfterDecimal",
      "le champ numérique doit avoir 2 chiffres après la virgule ou moins",
      (number) => /^\d+(\.\d{1,2})?$/.test(number),
    )
    .min(1),
  description: yup.string().max(125),
  shop_id: yup.number().integer().min(1).required("Champ obligatoire"),
})
const ContentVends = () => {
  const { api } = useContext(AppContext)
  const [product, setProduct] = useState(null)
  const {
    query: { id },
  } = useRouter()
  const initialValues = {
    name: product?.name,
    price: product?.price,
    description: product?.description,
    shop_id: product?.shop_id,
  }
  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        await api.put(`/product/${id}`, {
          name: values.name,
          price: values.price,
          description: values.description,
          shop_id: values.shop_id,
        })
        alert("Produit Modifier")
        router.push("/dashboard")
        actions.resetForm()
      } catch (err) {
        actions.setErrors({ form: "une erreur" })
      }
    },
    [api, id],
  )
  useEffect(() => {
    ;(async () => {
      const { data } = await api.get(`/product/${id}`)
      setProduct(data)
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
                    {product ? (
                      <div key={product.id}>
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
                            as={FormInput}
                            name="shop_id"
                            value={product.shop.name}
                            label="Magasin"
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
export default ContentVends
