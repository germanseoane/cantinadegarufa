import React from "react";
import pizza from "./assets/pizza.jpg";
import logo from "./assets/logo.png";
import "./LandingScreen.css";
import {
  BsTelephone,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const LandingScreen = ({ setScreen }) => {
  return (
    <>
      <img
        src={pizza}
        alt="pizza"
        style={{
          height: "96vh",
          width: "100%",
          position: "absolute",
          objectFit: "cover",
          overflow: "hidden",
        }}
      />
      <div className="logo-container">
        <div className="text1">
          <img src={logo} alt="logo" className="image-logo" />
        </div>
      </div>
      <div className="glass-container">
        <div className="text">
          <div className="container">
            <h2 className="para">Pizzería y Cocina - Horno a Leña</h2>

            <button className="main-btn" onClick={() => setScreen("modal")}>
              Vea la carta
            </button>
          </div>
        </div>
      </div>
      <div className="title-info">
        <p className="text-info">
          Abierto de Martes a Domingo de 20 a 00hs.
          <br />
          Pedidos al tel: 2622 86 19
        </p>
        <p className="text-info">
          <a
            className="icon-links"
            href="https://www.instagram.com/lacantinadegarufa/?hl=es"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={24} style={{ marginLeft: 10 }} />
          </a>
          <a
            className="text-info"
            href="https://www.facebook.com/profile.php?id=100073572588746"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook size={24} style={{ marginLeft: 10 }} />
          </a>
          <a
            className="text-info"
            href="https://wa.me/59892480080"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={24} style={{ marginLeft: -10 }} />
          </a>
        </p>
      </div>

      <div className="footer">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <MdLocationPin />
          <p className="title-footer">
            La Cantina De Garufa - Dir: 4 de julio 3171
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BsTelephone />
          <p className="title-footer">Tel: 2622 86 19</p>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
