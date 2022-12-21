import React from "react";
import "../styles/About.css";
export default function Testimonials() {
  const testimonies = [
    {
      data: "The goodness of God",
      url: "https://res.cloudinary.com/dbmnrmjlm/image/upload/v1671649958/Church/7_fzrgom.jpg",
    },
    {
      data: "Amazing Break through",
      url: "https://res.cloudinary.com/dbmnrmjlm/image/upload/v1671649958/Church/3_rpgn2n.jpg",
    },
    {
      data: "Unspeakable Grace",
      url: "https://res.cloudinary.com/dbmnrmjlm/image/upload/v1671649958/Church/6_dxe3s6.jpg",
    },
  ];
  return (
    <div id="testimonies" className="about__container">
      <h5 className="heading_2">
        Testim<span>onials</span>
      </h5>
      <p className="leading_2">
        Listen to awesome testimonies that will increase your faith in God,and
        strength your spiritual uprightness. The lord is indeed the greatess,
        these testimonies are plane and direct.{" "}
      </p>
      <div className="image__grid">
        {testimonies.map((testimony, index) => (
          <img src={testimony.url} key={index} alt="testimonies" />
        ))}
      </div>
    </div>
  );
}
