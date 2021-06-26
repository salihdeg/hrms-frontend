import React from "react";
import MainCarousels from "./MainCarousels";
import SponsoredJobAdvertisement from "../pages/SponsoredJobAdvertisement";
import "../App.css";

export default function MainDashboard() {
  return (
    <div>
      <MainCarousels />
      <div style={{ marginTop: "4em" }}>
        <h1 style={{textAlign:"left"}}>Öne Çıkan İlanlar</h1>
        <SponsoredJobAdvertisement />
      </div>
    </div>
  );
}
