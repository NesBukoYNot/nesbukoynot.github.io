const Storefront = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Featured Collections</h1>
                <p>Our best-selling and newest coconut coir products.</p>
            </header>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {[1, 2, 3].map(i => (
                    <div key={i} className="placeholder-card">
                        <div style={{ height: '200px', backgroundColor: '#e0e0e0', borderRadius: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Product Image Placeholder
                        </div>
                        <h3>Featured Product {i}</h3>
                        <p>$XX.XX</p>
                        <button className="login-btn" style={{ marginTop: '10px', width: '100%', justifyContent: 'center' }}>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Storefront;
