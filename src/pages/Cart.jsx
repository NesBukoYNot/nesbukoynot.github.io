const Cart = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Your Shopping Cart</h1>
            </header>
            <div className="placeholder-card">
                <p>No items in your cart yet.</p>
                <button className="login-btn" style={{ marginTop: '20px' }}>Go Shopping</button>
            </div>
        </div>
    );
};

export default Cart;
