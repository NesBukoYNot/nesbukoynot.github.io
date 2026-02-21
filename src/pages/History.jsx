const History = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Transaction History</h1>
            </header>
            <div className="placeholder-card">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                            <th style={{ padding: '10px' }}>Date</th>
                            <th style={{ padding: '10px' }}>Items</th>
                            <th style={{ padding: '10px' }}>Total</th>
                            <th style={{ padding: '10px' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4" style={{ padding: '40px', textAlign: 'center', color: '#888' }}>
                                No past transactions found.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
