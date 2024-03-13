// F47.js
import React from "react";
import "../css/1449.css";
import F1560 from "./1560";
import offersData from "../data/offerData";
function getRandomOffers(offers, count) {
  const shuffled = [...offers].sort(() => 0.5 - Math.random()); // 打乱数组
  return shuffled.slice(0, count); // 获取前count个项
}
function F47() {
  const randomOffers = getRandomOffers(offersData, 8);
  return (
    <div className="frame-screen">
      <div className="group1449">
        <div className="text-wrapper-8">Most Popular this month</div>
        <div className="text-wrapper-9">See All</div>
      </div>
      <div className="frame-brand">
      {randomOffers.map((offer, index) => (
          <F1560 key={index} offer={offer} /> // 假设F1562组件接受offer作为prop
        ))}
        <F1560 />
        <F1560 />
        <F1560 />
        <F1560 />
      </div>
    </div>
  );
}

export default F47;
