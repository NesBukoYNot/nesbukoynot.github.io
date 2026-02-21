const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>NesBukoYNot</h3>
                    <p>Innovating with Coconut Coir for a Sustainable Future.</p>
                </div>

                <div className="footer-info">
                    <p className="disclaimer">
                        For educational purposes only, and no copyright infringement is intended.
                    </p>
                    <p className="copyright">
                        © {new Date().getFullYear()} NesBukoYNot Group. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
