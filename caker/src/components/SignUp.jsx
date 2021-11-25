import Image from "next/image"
import cupCake from "../assets/images/cake.jpg"
import FormInput from "./FormInput"
import Button from "../../src/components/Button"
import Link from "./Link"
import { Field, Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"
import FormField from "./FormField"
import { useRouter } from "next/router"
import AppContext from "./AppContext"

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Champ obligatoire").min(1).max(120),
  lastName: yup.string().required("Champ obligatoire").min(1).max(120),
  email: yup.string().email("email non valide").required("Champ obligatoire"),
  password: yup
    .string()
    .min(8)
    .required(
      "Veuillez compléter votre mot de passe, il doit comporter au moins 8 caractères.",
    ),
  password2: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Les mots de passe doivent correspondre",
    ),
  address: yup.string().min(1).required("Champ obligatoire"),
  city: yup.string().min(1).max(120).required("Champ obligatoire"),
  zipCode: yup.number().integer().min(1).required("Champ obligatoire"),
  profilePicture: yup.string().max(125),
  role_id: yup.number().integer().min(1).required(),
})
const ContentSignUp = () => {
  const router = useRouter()
  const { api } = useContext(AppContext)
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "09 route",
    city: "Paris",
    zipCode: 93160,
    profilePicture: "",
    role_id: "",
  }
  /*const handleFormSubmit = useCallback((values) => {
    console.log("submited", values)
  }, [])*/
  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        await api.post("/sign-up", {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          address: values.address,
          city: values.city,
          zipCode: values.zipCode,
          profilePicture: values.profilePicture,
          role_id: values.role_id,
        })
        router.push("/signIn")
      } catch (err) {
        alert("Invalid")
        actions.setErrors({ form: "une erreur" })
      }
    },
    [api, router],
  )

  return (
    <div className="py-5">
      <div className="inner">
        <div className="image-holder">
          <Image
            src={cupCake}
            alt="Image"
            className=""
            width={500}
            height={1100}
          />
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors }) =>
            console.log(errors) || (
              <form onSubmit={handleSubmit}>
                <h3>S'inscrire</h3>
                <div id="my-radio-group">Vous êtes:</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field
                      type="radio"
                      name="role_id"
                      value="2"
                      className="mb-3"
                    />
                    Je suis patissier
                  </label>
                  <label>
                    <Field type="radio" name="role_id" value="3" />
                    Je suis client
                  </label>
                </div>
                <FormField
                  as={FormInput}
                  type="text"
                  placeholder="prenom *"
                  name="firstName"
                />
                <FormField
                  as={FormInput}
                  type="text"
                  placeholder="nom *"
                  name="lastName"
                />
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
                <FormField
                  as={FormInput}
                  type="password"
                  placeholder="confirme mot de passe *"
                  name="password2"
                />
                <FormField
                  as={FormInput}
                  type="text"
                  placeholder="adresse *"
                  name="address"
                />
                <FormField
                  as={FormInput}
                  type="text"
                  placeholder="ville *"
                  name="city"
                />
                <FormField
                  as={FormInput}
                  type="number"
                  pattern="[0-9]{5}"
                  placeholder="code postal *"
                  name="zipCode"
                  min="1"
                  max="99999"
                />
                <span className="text-danger">* ces champs sont requis</span>
                <div className="form-login">
                  <Button type="submit" className="my-2">
                    Envoyer
                  </Button>
                  <p className="fs-7">
                    Vous avez déjà un compte ?
                    <Link href="/signIn" className="text-decoration-underline">
                      Connexion
                    </Link>
                  </p>
                </div>
              </form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}
export default ContentSignUp
