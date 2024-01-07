import { Link } from "react-router-dom";

function FreeBSTemplates(): JSX.Element {
  return (
    <main>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <img src="/logo192.png" width="65px" alt="Tent Admin Dashboard" />

            <span className="fs-4">Tent Admin</span>
          </Link>
        </header>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">
              Free Bootstrap Admin Templates
            </h1>
            <p className="col-md-12 fs-4">
              The best Bootstrap templates you will ever find for your Admin
              Dashbaord 🚀
            </p>
            {/* <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button> */}
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <img
                src="https://coreui.io/images/templates/coreui_free_1440.webp"
                className="img-fluid"
                alt="CoreUI Free Bootstrap Admin Template"
              />
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                  <h3 className="mt-2">CoreUI Free Bootstrap Admin Template</h3>
                  <a
                    className="btn btn-light"
                    href="https://coreui.io/product/free-bootstrap-admin-template/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </div>
                <span>FREE</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <img
                src="https://www.wrappixel.com/wp-content/uploads/edd/2020/04/ample-admin-bootstrap-lite-y.jpg"
                className="img-fluid"
                alt="Ample Bootstrap Admin Lite"
              />
              <div className="d-flex flex-row justify-content-between align-items-center ">
                <div>
                  <h3 className="mt-2">Ample Bootstrap Admin Lite</h3>
                  <a
                    className="btn btn-light"
                    href="https://www.wrappixel.com/templates/ample-admin-lite/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </div>
                <span>FREE</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Core UI</h2>
              <p>
                Swap the background-color utility and add a `.text-*` color
                utility to mix up the jumbotron look. Then, mix and match with
                additional component themes and more.
              </p>
              <img
                src="https://coreui.io/images/templates/coreui_free_1440.webp"
                className="img-fluid"
                alt=""
              />
              <a
                className="btn btn-outline-light"
                href="https://coreui.io/product/free-bootstrap-admin-template/"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Change the background</h2>
              <p>
                Swap the background-color utility and add a `.text-*` color
                utility to mix up the jumbotron look. Then, mix and match with
                additional component themes and more.
              </p>
              <button className="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Add borders</h2>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've adjusted the alignment and
                sizing of both column's content for equal-height.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-body-secondary border-top">
          &copy; 2023
        </footer>
      </div>
    </main>
  );
}

export default FreeBSTemplates;