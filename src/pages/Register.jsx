const Register = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Create Account</h1>
                <p>Join our sustainable community today.</p>
            </header>
            <div className="placeholder-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                    <label>Complete Name</label>
                    <input type="text" placeholder="John Doe" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />

                    <label>Email Address</label>
                    <input type="email" placeholder="email@example.com" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />

                    <label>Password</label>
                    <input type="password" placeholder="********" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />

                    <label>Confirm Password</label>
                    <input type="password" placeholder="********" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />

                    <label>Address</label>
                    <textarea placeholder="House No, Street, Barangay, City" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', minHeight: '80px' }} />

                    <label>Mobile Number</label>
                    <input type="tel" placeholder="09XX XXX XXXX" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />

                    <button className="login-btn" style={{ marginTop: '10px' }}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
