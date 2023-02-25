import React from "react";
import Hero from "./Hero";
import Feature from "./Feature";
import Favourite from "./Favourite";
import Map from "./Map";
import Partner from "./Partner";
import DefaultTemp from "../../templates/DefaultTemp";

export default function Home() {
  return (
    <>
      <DefaultTemp title="Home">
        <Hero />
        <Feature />
        <Favourite />
        <Map />
        <Partner />
      </DefaultTemp>
    </>
  );
}
