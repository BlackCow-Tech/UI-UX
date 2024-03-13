import React from "react";
import "../css/1449.css";
import F1562 from "./1562";
import Frame1482 from "./1482";
import offersData from "../data/offerData";
import { useClickedItem } from "./ClickedItemContext";
function getRandomOffers(offers, count) {
  const shuffled = [...offers].sort(() => 0.5 - Math.random()); // 打乱数组
  return shuffled.slice(0, count); // 获取前count个项
}

function F1449() {
  const { clickedItems, toggleItem } = useClickedItem();

  // Ensure clickedItems is always treated as an array
  const safeClickedItems = clickedItems || [];
  const randomOffers = getRandomOffers(offersData, 8);
  return (
    <div className="frame-screen">
      <div className="group1449">
        <div className="text-wrapper-8">TOP Deals</div>
      </div>
      {/* 使用新的CSS类或现有的.frame-brand类 */}
      <div className="frame-clicked-items">
        {safeClickedItems.map((item) => (
          <Frame1482 key={item} item={item} onClick={toggleItem} />
        ))}
      </div>
      <div className="frame-brand">
      {randomOffers.map((offer, index) => (
          <F1562 key={index} offer={offer} /> // 假设F1562组件接受offer作为prop
        ))}
      </div>
    </div>
  );
}

export default F1449;
