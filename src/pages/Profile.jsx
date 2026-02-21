const Profile = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Your Profile</h1>
            </header>
            <div className="placeholder-card" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#2d5a27', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                        JD
                    </div>
                    <div>
                        <h2>John Doe</h2>
                        <p style={{ color: '#666' }}>Member since March 2026</p>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Mobile:</strong> 0912 345 6789</p>
                    <p><strong>Address:</strong> 123 Coconut St., Manila, Philippines</p>
                </div>

                <button className="login-btn" style={{ marginTop: '30px', width: '100%' }}>Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;
