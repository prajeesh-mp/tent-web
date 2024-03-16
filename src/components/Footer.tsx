import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src="/logo192.png" alt="" width="24" height="24" />
                    <small className="d-block mb-3 text-body-secondary">Tent Admin</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <span className="link-secondary text-decoration-none">Charts</span>
                        </li>
                        <li className="mb-1">
                            <span className="link-secondary text-decoration-none">Tables</span>
                        </li>
                        <li className="mb-1">
                            <span className="link-secondary text-decoration-none">Login Page</span>
                        </li>
                        <li className="mb-1">
                            <span className="link-secondary text-decoration-none">Form Validation</span>
                        </li>
                        <li className="mb-1">
                            <span className="link-secondary text-decoration-none">Context Menu</span>
                        </li>
                        <li className="mb-1">
                            <span className="link-secondary text-decoration-none">Cards</span>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <a className="link-secondary text-decoration-none" href="https://tent-admin-demo.web.app" target="_blank" rel="noreferrer">
                                Demo
                            </a>
                        </li>
                        <li className="mb-1">
                            <a
                                className="link-secondary text-decoration-none"
                                href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Bootstrap
                            </a>
                        </li>
                        <li className="mb-1">
                            <a className="link-secondary text-decoration-none" href="https://react.dev/" target="_blank" rel="noreferrer">
                                React
                            </a>
                        </li>
                        <li className="mb-1">
                            <Link className="link-secondary text-decoration-none" to="/blog/free-bootstrap-admin-templates">
                                Blog
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="link-secondary text-decoration-none" to="/blog/free-bootstrap-admin-templates">
                                Free Boostrap Templates
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <span className="link-secondary text-decoration-none">Team</span>
                        </li>
                        <li className="mb-1">
                            <Link className="link-secondary text-decoration-none" to="/privacy-policy">
                                Privacy
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="link-secondary text-decoration-none" to="/terms">
                                Terms
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
