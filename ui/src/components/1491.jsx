// F1491.js
import React from "react";
import { useClickedItem } from "./ClickedItemContext";
import "../css/1491.css";

export function F1491({ data }) {
  const { toggleItem } = useClickedItem();

  return (
    <div className="frame-1491">
      {data.map(card => (
        <div key={card.name} className="frame-1482" onClick={() => toggleItem(card.name)}>
          <p className="frame-text">{card.name}</p>
          {/**<img src={card.imageUrl} alt="Not Found" className="icon-arrow-down" />*/}
          
        </div>
      ))}
    </div>
  );
}
