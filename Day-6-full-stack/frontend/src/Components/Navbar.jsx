import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <h4 style={{ cursor: "pointer", border: '1px solid black' }}>Home</h4>
                <h4 style={{ cursor: "pointer", border: '1px solid black' }}>User Handler</h4>
                <h4 style={{ cursor: "pointer", border: '1px solid black' }}>Product Handler</h4>
                <h4 style={{ cursor: "pointer", border: '1px solid black' }}>All product</h4>
                <h4 style={{ cursor: "pointer", border: '1px solid black' }}>Cart</h4>
                <h4 style={{ cursor: "pointer", border: '1px solid black' }}>Account</h4>
                <h4 style={{ cursor: "pointer", border: '1px solid black' }}>Logout</h4>
            </div>
        </div>
    )
}

export default Navbar