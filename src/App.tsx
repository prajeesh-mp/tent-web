import NavBar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <img src="/logo.png" width="200px" />
            <h1 className="display-3 fw-bold">Designed for developers</h1>
            <h3 className="fw-normal text-muted mb-3">
              Build minimalistic Dashboard with Tent Admin
            </h3>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-flex flex-row align-items-center justify-content-center my-5">
          <a
            href="https://forms.gle/YgdgZVp93UNmnthu7"
            className="btn btn-primary align-self-center w-25 "
          >
            Join Waitlist for 50% discount
            <img src="/right-arrow.png" width="25px" height="25px" />
          </a>
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
                src="/tent-admin-dashboard.jpg"
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

          <div className="row my-5 bg-light p-5 rounded">
            <h3 className="text-center">Customizable Components</h3>
            <p className="text-center">
              Adapt the dashboard to your preferences. Tent offers a range of
              customizable components, ensuring that your workspace aligns
              perfectly with your coding style and project requirements.
            </p>
          </div>

          <div className="row my-5">
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <h2>Smart Forms</h2>
              <p className="text-center text-muted">
                Simplify data input and management with our smart forms. From
                data entry to updates, our forms are designed for efficiency,
                providing a smooth and intuitive experience for your team to
                interact with and contribute to your internal processes.
              </p>
            </div>
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="/tent-admin-form.jpg"
                className="rounded img-fluid shadow"
              />
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

          <div className="row my-5">
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <h2>Context Menu</h2>
              <p className="text-center text-muted">
                Empower your team with seamless navigation and functionality.
                The context menu feature allows for intuitive and efficient
                interaction with your dashboard elements, ensuring a fluid user
                experience as your team manages tasks and information.
              </p>
            </div>
            <div className="col-6 p-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="/tent-admin-context-menu.jpg"
                className="rounded img-fluid w-25"
              />
            </div>
          </div>

          <div className="row my-5 bg-light p-5 rounded">
            <h3 className="text-center">
              Tent Admin Dashboard: Crafted for Developers, Engineered for
              Excellence
            </h3>
            <p className="text-center">
              Unlock the full potential of your development with Tent Admin
              Dashboard. Tailored with precision for developers, our software
              seamlessly combines aesthetics and functionality to enhance your
              coding experience.
            </p>
          </div>

          <div className="d-flex flex-row align-items-center justify-content-center my-5">
            <a
              href="https://forms.gle/YgdgZVp93UNmnthu7"
              className="btn btn-primary align-self-center w-25 "
            >
              Join Waitlist for 50% discount
              <img src="/right-arrow.png" width="25px" height="25px" />
            </a>
          </div>
          <div className="mb-3 col-sm-12 col-md-4 col-lg-4 "></div>
        </div>
      </main>

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3"></ul>
          <p className="text-center text-body-secondary">© 2023 CodeArt</p>
        </footer>
      </div>
    </>
  );
}

export default App;
