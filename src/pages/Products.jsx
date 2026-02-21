const Products = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Our Full Catalog</h1>
                <p>Browse our complete range of eco-friendly fiber solutions.</p>
            </header>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="placeholder-card" style={{ padding: '20px' }}>
                        <div style={{ height: '150px', backgroundColor: '#e0e0e0', borderRadius: '8px', marginBottom: '15px' }}></div>
                        <h4>Coir Product {i}</h4>
                        <p>$XX.XX</p>
                        <button className="login-btn" style={{ marginTop: '10px', width: '100%', padding: '8px', fontSize: '0.9rem' }}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
