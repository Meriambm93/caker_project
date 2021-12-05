import FormInput from "./FormInput"
import FormLabel from "./FormLabel"
import Button from "../../src/components/Button"
import FormContact from "./FormContact"
import { Formik, Field } from "formik"

const Contact = () => {
  return (
    <div className="container py-5">
      <div
        className="container-fluid
       py-5"
      >
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contacter Nous</h1>
        </div>
      </div>
      <div className="container py-1">
        <div className="card-body bg-light">
          <Formik initialValues={{ subject: "", body: "" }}>
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit} className="col-md-9 m-auto">
                <div className="row">
                  <div className="form-group col-md-6 mb-3">
                    <FormLabel for="inputname">Nom</FormLabel>
                    <FormInput
                      type="text"
                      className="form-control mt-1"
                      id="name"
                      name="name"
                      placeholder="Charlotte"
                    ></FormInput>
                  </div>
                  <div className="form-group col-md-6 mb-3">
                    <FormLabel for="inputemail">Email</FormLabel>
                    <FormInput
                      type="email"
                      className="form-control mt-1"
                      id="email"
                      name="email"
                      placeholder="Charlotteframboise@gmail.com"
                    ></FormInput>
                  </div>
                </div>
                <div className="form-group col-md-6 mb-3">
                  <FormLabel for="inputemail">Sujet</FormLabel>
                  <Field
                    placeholder="Subject"
                    name="subject"
                    className="form-control mt-1"
                  />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <FormLabel for="inputemail">Message</FormLabel>
                  <Field
                    as="textarea"
                    placeholder="Write your message"
                    name="body"
                    className="form-control mt-1"
                  />
                </div>
                <div className="row">
                  <a
                    target="_top"
                    href={`mailto:contact@caker.com?subject=${encodeURIComponent(
                      values.subject,
                    )}&body=${encodeURIComponent(values.body)}`}
                  >
                    Envoyer
                  </a>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className="row">
        <FormContact>
          <h2 className="text-center">Telephone</h2>
          <p className="text-center">0651452123</p>
        </FormContact>
        <FormContact>
          <h2 className="text-center">Adresse</h2>
          <p className="text-center">123 Avenue des Champs Elysées</p>
        </FormContact>
        <FormContact>
          <h2 className="text-center">Email</h2>
          <p className="text-center">Caker@gmail.com</p>
        </FormContact>
      </div>
    </div>
  )
}
export default Contact
