import React from "react";
import MainCarousels from "./MainCarousels";
import SponsoredJobAdvertisement from "../pages/SponsoredJobAdvertisement";
import "../App.css";

export default function MainDashboard() {
  return (
    <div>
      <MainCarousels />
      <div style={{ marginTop: "4em" }}>
        <SponsoredJobAdvertisement />
      </div>
    </div>
  );
}
