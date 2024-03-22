import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home(): JSX.Element {
    const handleFeaturesScroll = (event: MouseEvent) => {
        // event.preventDefault();
        const element = document.getElementById("features");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handlePricingScroll = (event: MouseEvent) => {
        // event.preventDefault();
        const element = document.getElementById("pricing");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="container py-3">
                <header>
                    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4">
                        <Link to="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                            <img src="/logo192.png" width={50} alt="Tent Admin - React Bootstrap Admin Template" />
                            <span className="fs-4 ms-2">Tent Admin</span>
                        </Link>

                        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" onClick={handleFeaturesScroll} to="/#features">
                                Features
                            </Link>
                            <Link className="py-2 link-body-emphasis text-decoration-none" onClick={handlePricingScroll} to="/#pricing">
                                Pricing
                            </Link>
                        </nav>
                    </div>

                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-semibold text-body-emphasis">React Bootstrap Admin Dashboard Template</h1>
                        <p className="fs-5 text-body-secondary">
                            Tent Admin is a modern React admin dashboard template. From interactive cards to dynamic tables, streamline your internal processes with our
                            cutting-edge features. <span className="text-highlight">Ship your project in days!</span>
                        </p>
                    </div>
                </header>

                <main>
                    <img src="/assets/images/tent-admin-products.png" alt="Tent Admin - React Bootstrap Admin Template" className="w-100 shadow mb-2 pt-3 bg-white br-3" />

                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-8 col-md-8 mx-auto">
                                <h2 className="fw-regular">Experience now, purchase later</h2>
                                <p className="lead text-body-secondary">Experiece the dashboard yourself rather than listening to our fancy words</p>
                                <p>
                                    <a href="https://forms.gle/4DgFkUAfjrkG7inK8" className="btn btn-primary m-2" rel="noreferrer">
                                        Buy now
                                    </a>
                                    <a href="https://tent-admin-demo.web.app" target="_blank" className="btn btn-lg btn-secondary m-2" rel="noreferrer">
                                        Experience now <span className="arrow right"></span>
                                    </a>
                                </p>
                                <p className="lead text-body-secondary">
                                    Explore our state-of-the-art Modern Dashboard, driven by React & Bootstrap. Unmatched functionality and ease of use are features of our
                                    Bootstrap React Admin Template. Avoid the sales pitch and take a look at our React Admin Bootstrap environment instead. Take a look at our admin
                                    dashboard and get a personal look at its elegant appearance and powerful functionality. Put your trust in your practical experience to help you
                                    make decisions.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3" id="features">
                        <div className="feature col">
                            <div className="flex w-full md:w-1/2 lg:w-1/3 mb-2 w-icon text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-library">
                                    <path
                                        className="primary"
                                        d="M3 8h18v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8zm6 3l-1 1v4l1 1H4l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zM3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
                                    />
                                    <path
                                        className="secondary"
                                        d="M4 18h16a1 1 0 0 1 1 1v1H3v-1a1 1 0 0 1 1-1zm8.4-15.91l9 4c1 .43.68 1.91-.4 1.91H3c-1.08 0-1.4-1.48-.4-1.91l9-4a1 1 0 0 1 .8 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="fs-2 text-body-emphasis fw-semibold">Bootstrap</h3>
                            <p className="text-muted">
                                Tent Admin is fully compatible with Bootstrap 5, so if you know how to use Bootstrap but need something extra, the Tent Admin Bootstrap Admin Panel
                                is the solution.
                            </p>
                            {/* However, our admin template is compatible if you're content to go with Bootstrap. It also offers enhancements and extra features
                                for those who may require more advanced functionality in their admin templates. */}
                        </div>
                        <div className="feature col">
                            <div className="flex w-full md:w-1/2 lg:w-1/3 w-icon mb-2 text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-launch">
                                    <path
                                        className="secondary"
                                        d="M6.64 6.46h7.07a1 1 0 0 1 .7 1.71l-4.24 4.24a1 1 0 0 1-.7.3H2.38A1 1 0 0 1 1.7 11l4.24-4.24a1 1 0 0 1 .7-.3zm10.9 10.9a1 1 0 0 1-.3.71L13 22.31a1 1 0 0 1-1.7-.7v-7.07a1 1 0 0 1 .29-.71l4.24-4.24a1 1 0 0 1 1.7.7v7.07z"
                                    />
                                    <path
                                        className="primary"
                                        d="M5.78 13.19a15.94 15.94 0 0 1 14.39-10.4 1 1 0 0 1 1.04 1.04 15.94 15.94 0 0 1-10.4 14.39 1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16zm.59 2.57a16.2 16.2 0 0 1 1.87 1.87 1 1 0 0 1-.47 1.6c-.79.25-1.6.42-2.4.54a1 1 0 0 1-1.14-1.13c.12-.82.3-1.62.53-2.41a1 1 0 0 1 1.6-.47z"
                                    />
                                    <path
                                        className="secondary"
                                        d="M7.23 10.26a19.04 19.04 0 0 1 6.5 6.51c-.92.58-1.9 1.07-2.92 1.45a1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16c.38-1.03.87-2 1.45-2.93zM17.62 3.1c.84-.17 1.7-.27 2.55-.3a1 1 0 0 1 1.04 1.04c-.03.86-.13 1.71-.3 2.55a19.2 19.2 0 0 0-3.29-3.29zm-3.91 7.2a2 2 0 1 1 2.83-2.83 2 2 0 0 1-2.83 2.83z"
                                    />
                                </svg>
                            </div>
                            <h3 className="fs-2 text-body-emphasis fw-semibold">Ship in days</h3>
                            <p className="text-muted">
                                Make use of pre-made, reusable, and frequently used UI components to save thousands of development hours. Additionally, Tent Admin React Bootstrap
                                Admin Template comes with an environment that is ready to use.
                            </p>
                        </div>
                        <div className="feature col">
                            <div className="flex w-full md:w-1/2 lg:w-1/3 w-icon mb-2 text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-desktop">
                                    <path
                                        className="primary"
                                        d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm0 2v10h16V4H4zm4 16a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.59l.7.7A1 1 0 0 1 16 23H8a1 1 0 0 1-.7-1.7l.7-.71V20z"
                                    />
                                    <path className="secondary" d="M2 14h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
                                </svg>
                            </div>
                            <h3 className="fs-2 text-body-emphasis fw-semibold">Responsive Design</h3>
                            <p className="text-muted">
                                Taking care of all the unique OS, device, and browser problems takes a long time and detracts from your main objective. You can avoid spending long
                                hours of testing by using Tent Admin's responsive components.
                            </p>

                            {/* Provide apps that are compatible with all popular
                                operating systems, browsers, and devices to give your users a seamless experience. */}
                        </div>
                        <div className="feature col">
                            <div className="flex w-full md:w-1/2 lg:w-1/3 w-icon mb-2 text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-airplane">
                                    <path
                                        className="secondary"
                                        d="M19 11.9l2.7 1.14c.18.08.3.26.3.46v2a.5.5 0 0 1-.6.49L12 14 2.6 16a.5.5 0 0 1-.6-.49v-2c0-.2.12-.38.3-.46L5 11.9V10a1 1 0 1 1 2 0v1.06l4.8-2.02a.5.5 0 0 1 .4 0l4.8 2.02V10a1 1 0 0 1 2 0v1.9z"
                                    />
                                    <path className="primary" d="M12 2a2 2 0 0 1 2 2v8l-1 8h-2l-1-8V4c0-1.1.9-2 2-2z" />
                                    <path
                                        className="secondary"
                                        d="M8.64 22.98c-.32.1-.64-.17-.64-.54v-1.1c0-.19.08-.35.2-.46l3.5-2.78c.18-.13.42-.13.6 0l3.5 2.78c.12.1.2.27.2.45v1.11c0 .37-.32.64-.64.54L12 21.9l-3.36 1.07z"
                                    />
                                </svg>
                            </div>

                            <h3 className="fs-2 text-body-emphasis fw-semibold">Lightweight</h3>
                            <p className="text-muted">Despite having a tonne of capabilities, Tent Admin React Bootstrap Template was intended to be lightweight and quick.</p>
                        </div>

                        <div className="feature col">
                            <div className="flex w-full md:w-1/2 lg:w-1/3 w-icon mb-2 text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-chat-group-alt">
                                    <rect width="16" height="13" x="2" y="2" className="secondary" rx="2" />
                                    <path className="primary" d="M6 16V8c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v13a1 1 0 0 1-1.7.7L16.58 18H8a2 2 0 0 1-2-2z" />
                                </svg>
                            </div>

                            <h3 className="fs-2 text-body-emphasis fw-semibold">Standard Support</h3>
                            <p className="text-muted">Have a problem or a suggestion? Draft a request email for assistance.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center mb-3 text-center" id="pricing">
                        <div className="col-md-4">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Tent Admin 1.0</h4>
                                </div>
                                <div className="card-body d-flex flex-column align-items-center">
                                    <span className="card-title pricing-card-title crossed-line">$29.99</span>
                                    <h3 className="card-title pricing-card-title fw-semibold">$14.99</h3>

                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li className="d-flex flex-row align-items-center mb-3">
                                            <div className="tickmark-circle me-3"></div>
                                            All UI Components
                                        </li>
                                        <li className="d-flex flex-row align-items-center mb-3">
                                            <div className="tickmark-circle me-3"></div>
                                            Typescript
                                        </li>
                                        <li className="d-flex flex-row align-items-center mb-3">
                                            <div className="tickmark-circle me-3"></div>
                                            Lifetime license
                                        </li>
                                        <li className="d-flex flex-row align-items-center mb-3">
                                            <div className="tickmark-circle me-3"></div>
                                            Priority email support
                                        </li>
                                        <li className="d-flex flex-row align-items-center mb-3">
                                            <div className="tickmark-circle me-3"></div>
                                            Unlimited Projects
                                        </li>
                                        <li className="d-flex flex-row align-items-center mb-3">
                                            <div className="tickmark-circle me-3"></div>
                                            Updates*
                                        </li>
                                    </ul>
                                    <a href="https://forms.gle/4DgFkUAfjrkG7inK8" className="w-100 btn btn-lg btn-primary">
                                        Buy now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <h4 className="mb-3">Blog</h4>
                    <div className="row mb-2">
                        <div className="col-md-12">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">Free Boostrap Templates</h3>
                                    <div className="mb-1 text-body-secondary">Mar 20</div>
                                    <p className="card-text mb-auto">
                                        The best Bootstrap templates you will ever find for your Admin Dashbaord. Discover unparalleled excellence in Modern Admin Dashboard design
                                        with our top-tier Bootstrap templates. Crafted with precision and innovation, our templates redefine the standards of functionality and
                                        aesthetics.
                                    </p>
                                    <Link to="/blog/free-bootstrap-admin-templates" className="icon-link gap-1 icon-link-hover stretched-link">
                                        Continue reading
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default Home;
