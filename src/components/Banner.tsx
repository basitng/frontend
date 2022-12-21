import React from "react";
import "../styles/Banner.css";

export default function Banner() {
  const image_link =
    "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";
  return (
    <div id="home" className="banner">
      <div className="navigations">
        <a href="#about">About</a>
        <a href="#testimonies">Testimonies</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>
      <h1 className="banner__heading">King Of Glory</h1>
      <h5 className="banner__p">
        The Elevation Church also known as TEC has been set up by God to develop
        members to be witnesses for Christ and still empower them to achieve the
        highest levels of distinction and greatness in life. At The Elevation
        Church, greatness primarily means service.
      </h5>
      <a href="" className="get__started_link">
        Get started
      </a>
      <img src={image_link} />
    </div>
  );
}
