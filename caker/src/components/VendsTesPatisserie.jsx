import Button from "./Button"
import Image from "next/dist/client/image"
import cake from "../assets/images/cake.png"
//import FormInput from "./FormInput"
import { Field, Formik } from "formik"
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
  description: yup.string().max(125),
  shop_id: yup.number().integer().min(1).required("Champ obligatoire"),
})
const ContentVends = () => {
  const { api } = useContext(AppContext)
  const {
    query: { id },
  } = useRouter()
  const initialValues = {
    name: "",
    price: "",
    description: "",
    avatar: "",
    shop_id: "",
  }
  /*const handleFormSubmit = useCallback((values) => {
    console.log("submited", values)
  }, [])*/
  /*const handleFormSubmit = useCallback(async (values) => {
    console.log(values)
    const formData = new FormData()
    formData.set("image", values.image)
    await axios.post("http://localhost:5000/upload-image/id", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    })
  }, [])*/
  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        await api.post("/product", {
          name: values.name,
          price: values.price,
          description: values.description,
          shop_id: values.shop_id,
        })
        actions.resetForm()
      } catch (err) {
        actions.setErrors({ form: "une erreur" })
      }
    },
    [api],
  )
  const [product, setProduct] = useState(null)
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
          <div className="col-lg-5 mt-5">
            <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title">Vends ta pâtisserie</h5>
              </div>
              <div className="card-body media align-items-center">
                <Image className="card-img img-fluid" src={cake} alt="" />

                <div className="media-body ml-4"></div>
                <Formik
                  initialValues={{ avatar: "" }}
                  onSubmit={handleFormSubmit}
                >
                  {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="form-v100 pt-0">
                      <FormField
                        as={FormInput}
                        type="file"
                        name="avatar"
                        label="Choisir une image"
                        className="form-control d-block"
                        accept="image/*"
                      />
                      <Button type="submit" name="submit">
                        +
                      </Button>
                    </form>
                  )}
                </Formik>
              </div>

              <div className="card-footer text-muted">
                <p>Ajoute jusqu'à 2 photos.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <a href="#">
                  <Image
                    className="card-img img-fluid text-center"
                    src={cake}
                    alt=""
                    width={150}
                    height={150}
                  />
                </a>
              </div>
              <div className="col-6">
                <a href="#">
                  <Image
                    className="card-img img-fluid"
                    src={cake}
                    alt=""
                    width={150}
                    height={150}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5">
            <div className="card mx-3">
              <Formik
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
                            value={product.name}
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
                            value={product.price}
                          />
                          <FormField
                            as={(FormInput, "textarea")}
                            className="form-control fs-6"
                            rows="5"
                            type="text"
                            label="Décris ta pâtisserie"
                            name="description"
                            placeholder="ex:un biscuit imbibé de sirop de fraise"
                            value={product.description}
                          />

                          <FormField
                            as={FormInput}
                            name="shop_id"
                            label="Magasin"
                            className="border-gray d-block mb-3"
                            value={product.shop.name}
                          />
                        </div>
                        <div className="row pb-3">
                          <div className="col-10 text-center ">
                            <Button type="submit" name="submit">
                              Ajouter
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
