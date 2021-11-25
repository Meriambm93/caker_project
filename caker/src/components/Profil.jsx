import Link from "next/link"
import Image from "next/image"
import avatar from "../assets/images/avatar.jpg"
import FormField from "./FormField"
import FormInput from "./FormInput"
import Button from "../../src/components/Button"
import { Formik } from "formik"
import { useCallback } from "react"
import * as yup from "yup"
import axios from "axios"
import { useRouter } from "next/router"

const validationSchema = yup.object().shape({
  firstName: yup.string().required().min(1).max(120),
  lastName: yup.string().required().min(1).max(120),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  address: yup.string().min(1).required(),
  city: yup.string().min(1).max(120).required(),
  zipCode: yup.number().integer().min(1).required(),
  role_id: yup.number().integer().min(1).required(),
})
const Profil = () => {
  const router = useRouter()
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "09 route",
    city: "Paris",
    zipCode: 93160,
    profilePicture: "",
    role_id: 3,
  }
  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        await axios.get("http://localhost:5000/user/profil/1", {
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
        router.push("/")
      } catch (err) {
        actions.setErrors({ form: "une erreur" })
      }
    },
    [router],
  )

  return (
    <div className="container light-style flex-grow-1 container-p-y ">
      <h4 className="font-weight-bold py-3 mb-4 text-warning"> Mon Profil</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <Link href="/" passHref>
                <a className="deco list-group-item">
                  <Button type="button">déconnexion</Button>
                </a>
              </Link>
            </div>
            <div className="list-group list-group-flush account-settings-links">
              <Link href="/deleteYourAccount" passHref>
                <a className="deco list-group-item">
                  <Button type="button">supprimer compte </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div
                className="tab-pane fade active show p-2"
                id="account-general"
              >
                <div className="photoProfil card-body media align-items-center">
                  <Image
                    src={avatar}
                    width={90}
                    height={90}
                    alt="avatar"
                    className="d-block ui-w-80 "
                  />
                  <div className="media-body ml-4">
                    <label className="avatar btn btn-outline-primary">
                      modifier la photo profil
                      <Button
                        type="file"
                        className="account-settings-fileinput bg-transparent borde-0"
                      />
                    </label>
                  </div>
                </div>
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleFormSubmit}
                  validationSchema={validationSchema}
                >
                  {({ handleSubmit, errors }) =>
                    console.log(errors) || (
                      <form onSubmit={handleSubmit} className="form-v100">
                        <hr className="border-light m-0" />
                        <div className="card-body bg-light">
                          <div className="form-group">
                            <FormField
                              as={FormInput}
                              type="text"
                              className="form-control mb-1"
                              placeholder="amandine"
                              name="firstName"
                            />
                          </div>
                          <div className="form-group">
                            <FormField
                              as={FormInput}
                              type="text"
                              placeholder="rose"
                              name="lastName"
                            />
                          </div>
                          <div className="form-group">
                            <FormField
                              as={FormInput}
                              type="text"
                              className="form-control mb-1"
                              placeholder="patisserie@mail.com"
                              name="email"
                            />
                          </div>
                          <div className="form-group">
                            <FormField
                              as={FormInput}
                              type="text"
                              placeholder="11 rue du chocolat"
                              name="address"
                            />
                          </div>
                          <div className="form-group">
                            <FormField
                              as={FormInput}
                              type="text"
                              placeholder="paris"
                              name="city"
                            />
                          </div>
                          <div className="form-group">
                            <FormField
                              as={FormInput}
                              type="number"
                              pattern="[0-9]{5}"
                              placeholder="75006"
                              name="zipCode"
                              min="1"
                              max="99999"
                            />
                          </div>
                        </div>
                        <h1 className="profil"> Modifier Mot de passe</h1>
                        <div
                          className="tab-pane active show"
                          id="account-change-password"
                        >
                          <div className="card-body pb-2 bg-light">
                            <div className="form-group">
                              <FormField
                                as={FormInput}
                                type="password"
                                placeholder="mot de passe actuel"
                                name="password"
                              />
                            </div>
                            <div className="form-group">
                              <FormField
                                as={FormInput}
                                type="password"
                                placeholder="nouveau mot de passe"
                                name="password2"
                              />
                            </div>
                            <div className="form-group">
                              <FormField
                                as={FormInput}
                                type="password"
                                placeholder="répeter le nouveau mot de passe"
                                name="password2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-right mt-5 mb-5">
                          <Link href="/" passHref>
                            <Button type="button">Sauvegarder</Button>
                          </Link>
                          &nbsp;
                          <Button type="button">Annuler</Button>
                        </div>
                      </form>
                    )
                  }
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profil
