import FormInput from "./FormInput"
import FormLabel from "./FormLabel"
import Button from "../../src/components/Button"
import Image from "next/dist/client/image"
import avatar from "../assets/images/avatar.jpg"

const Commentaire = () => {
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

        <div className="card-body pb-2 bg-white">
          <div className="form-group">
            <FormLabel>Ajouter un titre</FormLabel>
            <FormInput
              type="text"
              value="Qu'est-ce qui est le plus important à savoir ?"
            />
          </div>
          <hr />
          <div className="form-group">
            <FormLabel>Ajouter une photo </FormLabel>
            <p>Les acheteurs trouvent les images plus utiles q'un texte seul</p>
            <Button type="file" className="mt-3">
              Ajouter la photo
            </Button>
          </div>
          <hr />

          <div className="form-group">
            <FormLabel>Ajouter un commentaire écrit</FormLabel>
            <div className="mb-3">
              <textarea className="form-control fs-6" rows="5">
                Qu'est-ce que vous avez aimé ou n'avez pas aimé ?
              </textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-5 mb-5">
        &nbsp;
        <Button type="button">Envoyer</Button>
      </div>
    </div>
  )
}

export default Commentaire
