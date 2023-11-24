import NavBar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Designed for developers</h1>
            <h3 className="fw-normal text-muted mb-3">
              Build anything you want with Tent Dashboard
            </h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal">
              <a className="icon-link" href="#">
                Take a tour
                <svg className="bi">
                  {/* <use xlink:href="#chevron-right" /> */}
                </svg>
              </a>
              <a className="icon-link" href="#">
                Buy
                <svg className="bi">
                  {/* <use xlink:href="#chevron-right" /> */}
                </svg>
              </a>
            </div>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="container ">
          <div className="row">
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <h2>Beautifully Crafted Tables</h2>
              <p className="text-center text-muted">
                Experience data organization like never before. Our dynamic
                tables offer a visually stunning and user-friendly interface to
                view, filter, and manipulate your data with ease. Streamline
                your workflow and enhance data comprehension effortlessly.
              </p>
            </div>

            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="/tent-dashboard-products.jpg"
                className="rounded img-fluid shadow"
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="/tent-admin-dashboard.png"
                className="rounded img-fluid shadow"
              />
            </div>
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <h2>Analytics</h2>
              <p className="text-center text-muted">
                Navigate your internal operations effortlessly. The
                user-friendly interface ensures that your team can manage and
                monitor products with ease, fostering a more productive and
                organized work environment.
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <h2>Interactive Cards</h2>
              <p className="text-center text-muted">
                Engage with your data dynamically using our interactive cards.
                From quick snapshots to detailed insights, our cards provide a
                versatile way to display and interact with essential information
                at a glance.
              </p>
            </div>
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="/tent-admin-card.jpg"
                className="rounded img-fluid w-50"
              />
            </div>
          </div>

          <div className="row my-5">
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="/tent-admin-popover.jpg"
                className="rounded img-fluid w-50"
              />
            </div>
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <h2>Intuitive Popovers</h2>
              <p className="text-center text-muted">
                Enhance your dashboard's functionality with our intuitive
                popovers. Streamline information display and user interactions
                by providing context-specific details and actions right at your
                team's fingertips.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
