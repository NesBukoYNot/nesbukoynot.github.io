const Checkout = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Checkout</h1>
            </header>
            <div className="placeholder-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
                <h3>Delivery Options</h3>
                <div style={{ margin: '15px 0', display: 'flex', gap: '20px' }}>
                    <label><input type="radio" name="delivery" /> Pickup</label>
                    <label><input type="radio" name="delivery" /> Delivery</label>
                </div>

                <h3>Payment Method</h3>
                <select style={{ width: '100%', padding: '10px', margin: '15px 0', borderRadius: '5px' }}>
                    <option>Cash on Delivery</option>
                    <option>GCash</option>
                    <option>Bank Transfer</option>
                </select>

                <button className="login-btn" style={{ width: '100%', marginTop: '20px' }}>Place Order</button>
            </div>
        </div>
    );
};

export default Checkout;
