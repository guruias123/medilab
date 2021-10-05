import React from 'react'
import './Medi.css'


function Medi() {
    return (
        <div>
            <div className="header" >
                <h1>Medilab<span style={{ color: "red" }}>+</span></h1>

                <div className="sub" >
                    <h3 className="sub-header">HOME</h3>
                    <h3 className="sub-header">SERVICES</h3>
                    <h3 className="sub-header">ABOUT</h3>
                    <h3 className="sub-header">TESTMONIAL</h3>
                    <h3 className="sub-header">CONTACT</h3>
                </div>
            </div>

            <div className="main" >
                <h1 >Medilab<span style={{ color: "red" }}>+</span></h1>
                <h1>HEALTHCARE AT YOUR DESK!!</h1>
                <p>Lorem ipsum doctor sit amet, consectetur adipisicing elit,sed do elusmod
                    tempor incididunt ut labore et dolore magna aliqua
                </p>
                <button style={{ backgroundColor: "#1DB9C3" }}>Makea an Appointment</button>
            </div>
            <div className="sub-main">
                <div className="our">
                    <h3>OUR SERVICES</h3>
                    <hr style={{ backgroundColor: "orange", width: "50px", height: "5px", marginLeft: "10px" }} />
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ekusmod tempor incididunt ut labore et dolore magna aliqua.Ut anim ad minim veniam, quis nostrud exercitation ullamco laborsis cillum.</p>
                </div>

                <div className="our">
                    <img style={{ width: "100px", marginTop: "10px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOXBGeaiMLE7bmIaL2R8X8r99XSC8XzJMTA&usqp=CAU" />
                    <h3>24 Hour Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ekusmod tempor incididunt ut labore et dolore magna aliqua. Ut anim ad minim veniam, quis nostrud exercitation ullamco laborsis cillum.</p>
                </div>

                <div className="our">
                    <img style={{ width: "100px", position: "relative", top: "0px" }} src="data:image/png;base64,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" />
                    <h3>Medical counseling</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ekusmod tempor incididunt ut labore et dolore magna aliqua. Ut anim ad minim veniam, quis nostrud exercitation ullamco laborsis cillum.</p>
                </div>
            </div>

            <div className="sub-main2" >
                <div className="our">
                    <img style={{ width: "100px", marginTop: "15px" }} src="data:image/png;base64,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" />
                    <h3>Emergency Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ekusmod tempor incididunt ut labore et dolore magna aliqua. Ut anim ad minim veniam, quis nostrud exercitation ullamco laborsis cillum.</p>
                </div>
                <div className="our">
                    <img style={{ width: "100px", }} src="data:image/png;base64,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" />
                    <h3>Premium HealthCare</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ekusmod tempor incididunt ut labore et dolore magna aliqua. Ut anim ad minim veniam, quis nostrud exercitation ullamco laborsis cillum.</p>
                </div>

            </div>



        </div>
    )
}

export default Medi