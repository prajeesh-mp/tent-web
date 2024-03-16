import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Support() {
    return (
        <div className="container py-3">
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4">
                    <Link to="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                        <img src="/logo192.png" width={50} alt="Tent Admin - React Bootstrap Admin Template" />
                        <span className="fs-4 ms-2">Tent Admin</span>
                    </Link>

                    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/#features">
                            Features
                        </Link>
                        <Link className="py-2 link-body-emphasis text-decoration-none" to="/#pricing">
                            Pricing
                        </Link>
                    </nav>
                </div>
            </header>

            <main>
                <h1>Contact Us</h1>
                <h2 className="mt-5">CodeArt</h2>
                <p>
                    Calicut,
                    <br />
                    Kerala, India
                </p>
                <p>email: info@tentadmin.com</p>
                <p>phone: +91 7012784714</p>
            </main>
            <Footer />
        </div>
    );
}

export default Support;
