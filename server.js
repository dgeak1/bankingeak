require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// DATABASE: Using Environment Variables for IDs and PINs to keep them safe from GitHub
const accounts = {
    [process.env.DOLP_ID || "DolpGrace001"]: { 
        pin: process.env.DOLP_PIN || "Ibrahim789", 
        name: "Dolp Grace",
        balance: 11075000.00, 
        txHistory: [
            { id: 1, amount: 525000, desc: 'Billionaire Pledge Injection' },
            { id: 2, amount: 550000, desc: 'Corporate Equity Matching' },
            { id: 3, amount: 1250000, desc: 'Sovereign Equity Reallocation' },
            { id: 4, amount: 950000, desc: 'Legacy Endowment Amortization' },
            { id: 5, amount: 750000, desc: 'Global Social Equity Dividend' },
            { id: 6, amount: 650000, desc: 'Venture Philanthropy Capital Call' },
            { id: 7, amount: 550000, desc: 'Cross-Border Humanitarian Flux' },
            { id: 8, amount: 450000, desc: 'Radical Innovation Seed Grant' },
            { id: 9, amount: 400000, desc: 'Climate Resilience Asset Transfer' }
        ]
    },
    [process.env.SHEF_ID || "ShefcikJJ1"]: { 
        pin: process.env.SHEF_PIN || "AmelialoveJJ", 
        name: "Shefcik John", 
        balance: 5000000.00, 
        txHistory: [
            { id: 1, amount: 525000, desc: 'Billionaire Pledge Injection' },
            { id: 2, amount: 550000, desc: 'Corporate Equity Matching' },
            { id: 3, amount: 925000, desc: 'Global Venture Liquidity Sync' },
            { id: 4, amount: 1250000, desc: 'Private Equity Reallocation' },
            { id: 5, amount: 750000, desc: 'Institutional Grant Funding' },
            { id: 6, amount: 650000, desc: 'Sovereign Wealth Distribution' },
            { id: 7, amount: 350000, desc: 'Legacy Endowment Credit' }
        ]
    }
};

// Authentication Endpoint
app.post('/api/verify', (req, res) => {
    const { id, pin } = req.body;
    const user = accounts[id];

    if (user && user.pin === pin) {
        console.log(`[AUTH SUCCESS] Access granted to: ${id}`);
        res.json({ 
            status: "success", 
            name: user.name, 
            balance: user.balance, 
            txHistory: user.txHistory 
        });
    } else {
        console.log(`[AUTH FAILED] Unauthorized attempt on ID: ${id}`);
        res.status(401).json({ status: "error", message: "Unauthorized Credentials" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`
    =========================================
    EAK SECURE VAULT ONLINE
    PORT: ${PORT}
    ENCRYPTION: AES-256 (MOCK)
    =========================================
    `);
});