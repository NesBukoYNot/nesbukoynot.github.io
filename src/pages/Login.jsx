const Login = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Member Login</h1>
            </header>
            <div className="placeholder-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <p>Login form will be placed here.</p>
                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input type="text" placeholder="Email" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <input type="password" placeholder="Password" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    <button className="login-btn">Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
