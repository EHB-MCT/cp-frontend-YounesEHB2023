import React from "react";

const Spotlight = ({ imageSrc, title, description, icon }) => {
    return (
        <div className="spotlight-wrapper">
            {[1, 2, 3].map((_, index) => (
                <div key={index} className="spotlight-container">
                    <div className="spotlight-image">
                        <img src={"./src/images/ErWasEens_Logo.png"} alt={title} />
                    </div>
                    <div className="spotlight-content">
                        <h2>{"Aladdin"}</h2>
                        <p>{"Younes Ben Ali"}</p>
                        <div className="spotlight-icon">
                            <img src={"./src/images/info_icon.png"} alt="Info Icon" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Spotlight;
