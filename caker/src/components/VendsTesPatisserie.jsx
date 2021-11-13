import Button from "./Button"
import Image from "next/dist/client/image"
import cake from "../assets/images/cake.png"
//import FormInput from "./FormInput"
import { Field, Formik } from "formik"
import * as yup from "yup"
import { useCallback } from "react"
import axios from "axios"

const validationSchema = yup.object().shape({
  name: yup.string().required().min(1).max(120),
  price: yup
    .number()
    .test(
      "maxDigitsAfterDecimal",
      "number field must have 2 digits after decimal or less",
      (number) => /^\d+(\.\d{1,2})?$/.test(number),
    )
    .min(1)
    .required(),
  mainPicture: yup.string().max(125).required(),
  secondaryPicture: yup.string().max(125),
  shop_id: yup.number().integer().min(1).required(),
})
const ContentVends = () => {
  const initialValues = {
    name: "",
    price: 25,
    mainPicture: "",
    secondaryPicture: "",
    shop_id: 2,
  }
  /*const handleFormSubmit = useCallback((values) => {
    console.log("submited", values)
  }, [])*/
  const handleFormSubmit = useCallback(async (values, actions) => {
    try {
      await axios.post("http://localhost:5000/product", {
        name: values.name,
        price: values.price,
        mainPicture: values.mainPicture,
        secondaryPicture: values.secndaryPicture,
        shop_id: values.shop_id,
      })
      actions.resetForm()
      alert("success!")
    } catch (err) {
      actions.setErrors({ form: "une erreur" })
    }
  }, [])

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
                <div className="media-body ml-4">
                  <label className="avatar btn btn-outline-primary">
                    ajouter la photo
                    <a
                      href=""
                      type="file"
                      className="account-settings-fileinput"
                    />
                  </label>
                  &nbsp;
                </div>
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
                    <div className="form-group mx-3">
                      <label className="form-label d-block">Titre</label>
                      <Field
                        type="text"
                        name="name"
                        className="form-control d-block"
                        placeholder="ex: charlotte aux fraises"
                      />
                      <label className="form-label d-block">Prix</label>
                      <Field
                        name="price"
                        type="number"
                        min="0"
                        step=".01"
                        className="form-control d-block"
                        placeholder="Prix"
                        id="setPrice"
                        pattern="^\d*(\.\d{0,2})?$"
                      />
                      <label className="form-label d-block">photo</label>
                      <Field
                        type="text"
                        name="mainPicture"
                        className="form-control d-block"
                        placeholder="ex: charlotte aux fraises"
                      />
                      <label className="form-label d-block">
                        Décris ta pâtisserie
                      </label>
                      <textarea className="form-control fs-6" rows="5">
                        ex: un biscuit imbibé de sirop de fraise
                      </textarea>
                      <label className="form-label d-block">
                        Conseils de dégustation:
                      </label>
                      <textarea className="form-control fs-6" row="5">
                        ex: Produit à conserver entre 0 et 3 °C....
                      </textarea>
                    </div>
                    <Field type="hidden" name="shop_id" />
                    <div className="row"></div>
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
export default ContentVends
