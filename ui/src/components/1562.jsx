// src/components/F1562.js
import React from "react";
import "../css/1562.css";

export default function F1562({ offer }) {
  return (
    <div className="frame1562-1560">
      <div className="group-56">
        <div className="frame1562-1550">
          <div className="frame1562-1566">
            <div className="frame-1545">
              <p className="chase">{offer.title}</p>
            </div>
          </div>
          <div className="frame-1548">
            <p className="up-to">Up to</p>
            <p className="_-20">{offer.subTitle}</p>
            <p className="cash-back">cash back</p>
          </div>
          <div className="frame-1544">
            <img src={offer.imageUrl} alt={offer.imageAlt} className="apple-jpeg-0" />
            <p className="apple">{offer.imageAlt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
