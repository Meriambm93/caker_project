import Image from "next/image"
import vogue from "../assets/images/vogue.jpg"
import FormInput from "./FormInput"
import Button from "../../src/components/Button"
import Link from "next/link"
import { Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"
import FormField from "./FormField"
import { useRouter } from "next/router"
import AppContext from "./AppContext"

const validationSchema = yup.object().shape({
  email: yup.string().email("email non valide").required("Champ obligatoire"),

  password: yup.string().required("Champ obligatoire"),
})
const SignIn = () => {
  const router = useRouter()
  const { api } = useContext(AppContext)
  const initialValues = {
    email: "",
    password: "",
  }
  const handelFormSubmit = useCallback(
    async ({ email, password }) => {
      try {
        await api.post("/sign-in", { email, password })
        router.push("/")
      } catch (err) {
        alert("Invalid")
      }
    },
    [api, router],
  )

  return (
    <div className="py-5">
      <div className="inner">
        <div className="image-holder">
          <Image src={vogue} alt="" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handelFormSubmit}
        >
          {({ handleSubmit }) => (
            <form action="" onSubmit={handleSubmit}>
              <h3>S'identifier</h3>
              <FormField
                as={FormInput}
                type="text"
                placeholder="e-mail *"
                name="email"
              />
              <FormField
                as={FormInput}
                type="password"
                placeholder="mot de passe *"
                name="password"
              />
              <div className="form-login">
                <Button type="submit">Connexion</Button>
                <p className="fs-6 ">
                  Vous n'avez pas de compte ?
                  <Link href="signUp" passHref>
                    <a className="text-decoration-underline">Créez-le.</a>
                  </Link>
                </p>
              </div>
              <br />
              <Link href="/forgotPassword" passHref>
                <a className="text-decoration-underline m-3">
                  Mot de passe oublié?
                </a>
              </Link>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default SignIn
