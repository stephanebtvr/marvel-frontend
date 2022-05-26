import React from "react";

const Footer = () => {
  return (
    <footer>
      <p className="banner-title">
        <span style={{ fontStyle: "italic" }}>
          <span style={{ color: "black" }}> &#xA9;</span> Site réalisé à{" "}
          <span style={{ color: "red" }}>
            <a href="https://www.lereacteur.io/bootcamp-javascript/formation-developpeur-web-mobile/?utm_source=googleads&gclid=Cj0KCQjwpf2IBhDkARIsAGVo0D19UFqu3ZL1HDhuRg_QiZ34VO02sBYyIMPdMEFLLM0CLo7Q-qES6kUaAhS8EALw_wcB">
              Le Reacteur
            </a>
          </span>{" "}
          par{" "}
          <span style={{ color: "red" }}>
            <a href="https://github.com/stephanebtvr">BETTAVER Stéphane </a>
          </span>
        </span>
        <span style={{ color: "black" }}> &#xA9;</span>
      </p>
    </footer>
  );
};

export default Footer;
