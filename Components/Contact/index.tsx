import { IParallax, Parallax } from "@react-spring/parallax";
import React, { useRef } from "react";

function Contact() {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 80,
      }}
    >
      Under Construction
    </div>
  );
}

export default Contact;
