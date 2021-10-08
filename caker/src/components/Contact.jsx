const Contact = () => {
  return (
    <div className="container py-5">
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contact Us</h1>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <h1>Inset Map</h1>

      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form">
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label for="inputname">Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="name"
                  name="name"
                  placeholder="Name"
                ></input>
              </div>
              <div className="form-group col-md-6 mb-3">
                <label for="inputemail">Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="email"
                  name="email"
                  placeholder="Email"
                ></input>
              </div>
            </div>
            <div className="mb-3">
              <label for="inputsubject">Subject</label>
              <input
                type="text"
                className="form-control mt-1"
                id="subject"
                name="subject"
                placeholder="Subject"
              ></input>
            </div>
            <div className="mb-3">
              <label for="inputmessage">Message</label>
              <textarea
                className="form-control mt-1"
                id="message"
                name="message"
                placeholder="Message"
                rows="8"
              ></textarea>
            </div>
            <div className="row">
              <div className="col text-end mt-2">
                <button type="submit" className="btn btn-success btn-lg px-3">
                  Let’s Talk
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
