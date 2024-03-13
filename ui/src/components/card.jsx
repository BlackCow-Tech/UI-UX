// CardOffer.js
import React from "react"
import "../css/card.css"

export default function CardOffer({ className, title, subTitle, offerDetails, imageUrl, imageAlt, logoUrl, logoAlt }) {
  return (
    <div className={className}>
      <div className="group-56">
        <div className="offer-container">
          {title && <div className="offer-title">
            <p>{title}</p>
          </div>}
          {subTitle && <div className="offer-subtitle">
            <p>{subTitle}</p>
          </div>}
          <div className="offer-details">
            {offerDetails.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          {imageUrl && <div className="offer-image">
            <img src={imageUrl} alt={imageAlt} />
            <p>{imageAlt}</p>
          </div>}
          {logoUrl && <div className="offer-logo">
            <img src={logoUrl} alt={logoAlt} />
            <p>{logoAlt}</p>
          </div>}
        </div>
      </div>
    </div>
  );
}
