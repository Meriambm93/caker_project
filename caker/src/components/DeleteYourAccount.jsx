import router from "next/router"
import { useContext } from "react"
import Button from "../../src/components/Button"
import AppContext from "./AppContext"

const DeleteYourAccount = () => {
  const { api, session } = useContext(AppContext)
  // const { userId } = session
  const id = "6"
  const handleClickDelete = async () => {
    try {
      await api.delete(`/user/profil/${id}`)
      router.push("/signUp")
    } catch (err) {
      console.log("une erreur")
    }
  }

  return (
    <div className="container light-style flex-grow-1 container-p-y ">
      <h3 className="font-weight-bold py-3 mb-4 text-warning">
        Supprimer Votre Compte
      </h3>

      <div className="tab-pane active show" id="account-change-password">
        <div className="centerSupp card-body pb-2 bg-light">
          <div className="deleteAcc form-group">
            <p>
              Lorsque vous cliquez sur le bouton ci-dessus,vos
              photos,commentaires et toutes les autres données seront
              définitivement supprimés et vous ne pourrez pas les récupérer.
            </p>
          </div>
        </div>
      </div>
      <div className="buttonDelete text-right mt-5 mb-5">
        <Button
          onClick={handleClickDelete}
          className="deleteButton"
          type="button"
        >
          Supprimer définitivement mon compte
        </Button>
      </div>
    </div>
  )
}

export default DeleteYourAccount
