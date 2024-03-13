import React, { useState } from "react";
import "../css/1512.css"; // 确保路径正确
import { F1491 } from "./1491";
import creditCardData from "../data/CreditCardData";

function F1512() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`menu-container ${isOpen ? "open" : ""}`}>
      <div className="menu-header">
        Personalize your credit card offers
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4g3fbcbkcj5-41%3A397?alt=media&token=1a0a3b5b-a09d-4cd5-8908-1e97f944e54e"
          alt="Toggle"
          className={`icon-arrow ${isOpen ? "up" : "down"}`}
          onClick={toggleMenu}
        />
      </div>
      {isOpen && (
        <div className="menu-content1">
          <div className="frame-52">
            Select your credit cards to get accurate offer recommendations
          </div>
          <div className="menu-content">
            <F1491 data={creditCardData}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default F1512;
