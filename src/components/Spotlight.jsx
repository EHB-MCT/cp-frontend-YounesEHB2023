import React from "react";

const Spotlight = ({ imageSrc, title, description, icon }) => {
    return (
        <div className="spotlight-container" style={{ border: "2px solid #4CAF50", borderRadius: "10px", padding: "10px", maxWidth: "300px" }}>
            <div className="spotlight-image" style={{ textAlign: "center" }}>
                <img src={"./src/images/ErWasEens_Logo.png"} alt={title} style={{ maxWidth: "100%", borderRadius: "5px" }} />
            </div>
            <div className="spotlight-content" style={{ marginTop: "10px" }}>
                <h2 style={{ fontSize: "1.5em", margin: "0" }}>{"Alladin"}</h2>
                <p style={{ fontSize: "1em", color: "#555" }}>{"Sprookje"}</p>
                <div className="spotlight-icon" style={{ marginTop: "10px", textAlign: "center" }}>
                    <img src={"./src/images/info_icon"} alt="Info Icon" style={{ width: "20px", height: "20px" }} />
                </div>
            </div>
        </div>
    );
};

export default Spotlight;
