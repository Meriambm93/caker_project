import Link from "next/link"
import Image from "next/image"
import avatar from "../assets/images/avatar.jpg"
import FormField from "./FormField"
import FormInput from "./FormInput"
import Button from "../../src/components/Button"
import { Formik } from "formik"
import { useCallback, useContext, useState } from "react"
import * as yup from "yup"
import axios from "axios"
import { useRouter } from "next/router"
import AppContext from "./AppContext"
import { useEffect } from "react"

const validationSchema = yup.object().shape({
  firstName: yup.string().required().min(1).max(120),
  lastName: yup.string().required().min(1).max(120),
  email: yup.string().required().email(),
  address: yup.string().required().min(1),
  city: yup.string().required().min(1).max(120),
  zipCode: yup.number().integer().min(1),
  new_password: yup.string().min(8),
})
const Profil = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const { api, session } = useContext(AppContext)
  const { userId } = session
  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    password: user?.password,
    address: user?.address,
    city: user?.city,
    zipCode: user?.zipCode,
    profilePicture: user?.profilePicture,
  }
  const handleFormSubmit = useCallback(
    async (values, actions) => {
      try {
        await api.put(`/user/profil/${userId}`, {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          address: values.address,
          city: values.city,
          zipCode: values.zipCode,
          profilePicture: values.profilePicture,
        })
        router.push("/")
      } catch (err) {
        console.log(err)
        actions.setErrors({ form: "une erreur" })
      }
    },
    [api, router],
  )
  useEffect(() => {
    ;(async () => {
      const { data } = await api.get(`/user/profil/${userId}`)
      setUser(data)
    })()
  }, [api])

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
                    <label>
                      <Button type="file">modifier la photo profil</Button>
                    </label>
                  </div>
                </div>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  onSubmit={handleFormSubmit}
                  validationSchema={validationSchema}
                >
                  {({ handleSubmit, errors }) =>
                    console.log(errors) || (
                      <form onSubmit={handleSubmit} className="form-v100">
                        {user ? (
                          <div key={user.id}>
                            <hr className="border-light m-0" />
                            <div className="card-body bg-light">
                              <div className="form-group">
                                <FormField
                                  as={FormInput}
                                  type="text"
                                  className="form-control mb-1"
                                  placeholder="Prénom"
                                  name="firstName"
                                />
                              </div>
                              <div className="form-group">
                                <FormField
                                  as={FormInput}
                                  type="text"
                                  name="lastName"
                                />
                              </div>
                              <div className="form-group">
                                <FormField
                                  as={FormInput}
                                  type="text"
                                  className="form-control mb-1"
                                  name="email"
                                />
                              </div>
                              <div className="form-group">
                                <FormField
                                  as={FormInput}
                                  type="text"
                                  name="address"
                                />
                              </div>
                              <div className="form-group">
                                <FormField
                                  as={FormInput}
                                  type="text"
                                  name="city"
                                />
                              </div>
                              <div className="form-group">
                                <FormField
                                  as={FormInput}
                                  type="number"
                                  pattern="[0-9]{5}"
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
                                    placeholder="nouveau mot de passe"
                                    name="new_password"
                                  />
                                </div>
                                <div className="form-group">
                                  <FormField
                                    as={FormInput}
                                    type="password"
                                    placeholder="répeter le nouveau mot de passe"
                                    name="retype_password"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="text-right mt-5 mb-5">
                              <Button type="submit">Sauvegarder</Button>
                              &nbsp;
                              <Button type="button">Annuler</Button>
                            </div>
                          </div>
                        ) : null}
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
