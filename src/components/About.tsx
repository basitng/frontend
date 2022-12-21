import React from "react";
import "../styles/About.css";
export default function About() {
  return (
    <div id="about" className="about__container">
      <h5 className="heading">About us</h5>
      <p className="leading">
        Faith Chamber Of Pr aise was established by the word of Gos, through his
        servant: Prophet Sam Kayode in 2004, The mandate of Faith Chamber Of
        Praise is to lead God’s people to the mountain of prayer where destinies
        are transformed and change for good. Here we established a Christ like
        relationship, give to the needy and help the helpless, it is a place
        where the love of God dwells. God has been faithful with this mandate,
        by doing great miracles through his Prophet: Sam Kayode. Giving sanity
        to the mentally impaired, healing the sick, bringing back the dead to
        life, transforming destiny and setting loose those in captivity of the
        devil. Indeed God has been Faithful.
      </p>
      <div className="grid_2">
        <div className="grid_item">
          <img src="https://images.unsplash.com/photo-1515295411605-71de55c34a9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div className="grid_item">
          <img src="https://images.unsplash.com/photo-1476231790875-016a80c274f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
        </div>
      </div>
    </div>
  );
}
