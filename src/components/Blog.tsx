import React from "react";
import "../styles/Blog.css";
export default function Blog() {
  return (
    <div className="blog__container">
      <div className="header">
        <h5 className="header_1">
          Our thought leadership in the press and latest
        </h5>
        <h5 className="header_2">
          thinking on vision, strategy, culture, and brand.
        </h5>
        <div className="block">
          <h1 className="heading">
            Latest <span>Blog</span>
          </h1>
          <a href="">Read more articles</a>
        </div>
      </div>
      <div className="blog__grid">
        <div className="grid__item">
          <div className="grid__content">
            <img src="https://media.wearemotto.com/app/uploads/2022/10/08130215/MOT-BlogPost-R0-110722-22.jpg" />
            <div className="category">Break through</div>
          </div>
          <h3 className="grid__item_heading">Salvation the greatest?</h3>
        </div>
        <div className="grid__item">
          <div className="grid__content">
            <img src="https://media.wearemotto.com/app/uploads/2022/10/08130215/MOT-BlogPost-R0-110722-22.jpg" />
            <div className="category">Break through</div>
          </div>
          <h3 className="grid__item_heading">Salvation the greatest?</h3>
        </div>
        <div className="grid__item">
          <div className="grid__content">
            <img src="https://media.wearemotto.com/app/uploads/2022/10/08130215/MOT-BlogPost-R0-110722-22.jpg" />
            <div className="category">Break through</div>
          </div>
          <h3 className="grid__item_heading">Salvation the greatest?</h3>
        </div>
      </div>
    </div>
  );
}
