import React from "react";
import { Helmet } from "react-helmet-async";

export default function DefaultTemp(props) {
  const { title, children } = props;
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title ? `${title} | Breeze Coffee` : "Breeze Coffee"}</title>
      </Helmet>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
