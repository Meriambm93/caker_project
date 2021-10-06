const ModalPatisserie = () => {
  return (
    <div
      className="modal fade bg-dark"
      id="templatemo_search"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="w-100 pt-1 mb-5 text-right">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form
          action=""
          method="get"
          className="modal-content modal-body border-0 p-0"
        >
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              id="inputModalSearch"
              name="q"
              placeholder="Search ..."
            />
            <button
              type="submit"
              className="input-group-text bg-success text-light"
            >
              <i className="fa fa-fw fa-search text-white"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalPatisserie
