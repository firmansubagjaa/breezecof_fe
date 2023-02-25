import React from "react";
import Hero from "./Hero";
import Feature from "./Feature";
import Favourite from "./Favourite";
import Map from "./Map";
import Partner from "./Partner";
import DefaultTemp from "../../templates/DefaultTemp";
import Sponsor from "./sponsor";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <DefaultTemp title="Home">
        <Hero />
        <Feature />
        <Favourite />
        <Map />
        <Sponsor />
        <Partner />
        <Footer />
      </DefaultTemp>
    </>
  );
}
