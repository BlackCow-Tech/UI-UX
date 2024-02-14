import React, { useState } from "react";
import "../css/1512.css"; // 确保路径正确
import { F14911 } from "./14911";
import { F14912 } from "./14912";
import { F14913 } from "./14913";

function F1512() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={`menu-container ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="menu-header">
                Personalize your credit card offers
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4g3fbcbkcj5-41%3A397?alt=media&token=1a0a3b5b-a09d-4cd5-8908-1e97f944e54e"
                    alt="Toggle"
                    className={`icon-arrow ${isOpen ? "up" : "down"}`}
                />
            </div>
            {isOpen && (
                <div className="menu-content">
                    
                    <div className="frame-52">
                        Select your credit cards to get accurate offer recommendations  
                    </div>
                    <F14911/>
                    <F14912/>
                    <F14913/>
                    
                    
            </div>
            )}
        </div>
    );
}

export default F1512;
