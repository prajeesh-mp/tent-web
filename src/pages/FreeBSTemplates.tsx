import { Link } from "react-router-dom";
import Template from "../components/Template";

function FreeBSTemplates(): JSX.Element {
    return (
        <main>
            <div className="container py-4">
                <header className="pb-3 mb-4 border-bottom">
                    <Link to="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
                        <img src="/logo192.png" width="65px" alt="Tent Admin Dashboard" />

                        <span className="fs-4">Tent Admin</span>
                    </Link>
                </header>

                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Free Bootstrap Admin Templates</h1>
                        <p className="col-md-12 fs-4">The best Bootstrap templates you will ever find for your Admin Dashbaord 🚀</p>
                        {/* <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button> */}
                    </div>
                </div>

                <div className="container mt-4">
                    <article>
                        <Template
                            title="CoreUI Free Bootstrap Admin Template"
                            description="CoreUI Free Admin Panel is not another blend of 3rd parties free components and libraries. It's the only Open Source Bootstrap Admin Dashboard
                            Template built on the enterprise-grade hand-crafted UI Components Library created and backed by professionals. CoreUI helps you build reliable web
                            apps faster than before."
                            imgUrl="https://coreui.io/images/templates/coreui_free_1440.webp"
                            downloadUrl="https://coreui.io/product/free-bootstrap-admin-template"
                            demoUrl="https://coreui.io/demos/bootstrap/4.2/free/"
                        />

                        <Template
                            title="Ample Bootstrap Admin Lite"
                            description="Ample Bootstrap Admin Lite is a free Bootstrap Dashboard Admin
                            Template with a broad scope of options and possibilities. It’s
                            one of the cleanest and most beautiful Bootstrap 4 templates you
                            can use for admin dashboards and admin panels."
                            imgUrl="https://www.wrappixel.com/wp-content/uploads/edd/2020/04/ample-admin-bootstrap-lite-y.jpg"
                            downloadUrl="https://www.wrappixel.com/templates/ample-admin-lite"
                            demoUrl="https://demos.wrappixel.com/free-admin-templates/bootstrap/ample-bootstrap-free/landingpage/index.html"
                        />
                    </article>
                </div>

                <footer className="pt-3 mt-4 text-body-secondary border-top">&copy; 2023</footer>
            </div>
        </main>
    );
}

export default FreeBSTemplates;
