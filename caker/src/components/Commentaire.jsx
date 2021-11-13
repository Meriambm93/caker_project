import FormInput from "./FormInput"
import FormLabel from "./FormLabel"
import Button from "../../src/components/Button"
import Image from "next/dist/client/image"
import avatar from "../assets/images/avatar.jpg"
import { Field, Formik } from "formik"
import { useCallback } from "react"
import * as yup from "yup"
import FormField from "./FormField"
import axios from "axios"
import { useRouter } from "next/router"

const validationSchema = yup.object().shape({
  message: yup.string().required().min(1).max(120),
  score: yup.number().integer().min(1).max(5).required(),
})
const ContentCommentaire = () => {
  const router = useRouter()
  const initialValues = {
    message: "",
    score: 1,
    user_id: 1,
    shop_id: 1,
  }

  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        await axios.post("http://localhost:5000/comment", {
          message: values.messages,
          score: values.score,
          user_id: values.user_id,
          shop_id: values.shop_id,
        })
        router.push("/")
      } catch (err) {
        actions.setErrors({ form: "une erreur" })
      }
    },
    [router],
  )

  return (
    <div className="container py-5">
      <div className="row">
        <h1 className="h2 pb-4">Créer un commentaire</h1>
        <div className="card-body media align-items-center">
          <div className="row">
            <div className="col-lg-1">
              <Image
                src={avatar}
                width={90}
                height={90}
                alt="avatar"
                className="d-block ui-w-80 "
              />
            </div>
            <div className="col-lg-9">
              <h1 className="h2 pb-4">Ramirez</h1>
            </div>
          </div>
        </div>
        <hr />
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors }) =>
            console.log(errors) || (
              <form onSubmit={handleSubmit}>
                <FormField
                  as={FormInput}
                  type="text"
                  placeholder="Votre Message *"
                  name="message"
                />

                <FormField
                  as={FormInput}
                  type="number"
                  placeholder="Votre Score *"
                  name="score"
                  min="1"
                  max="5"
                />
                <div className="form-login">
                  <Button type="submit" className="my-4">
                    Envoyer
                  </Button>
                </div>
              </form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default ContentCommentaire
