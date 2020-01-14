import React from "react";

export default function Uses() {
  return (
    <div className="usesContainer">
      <div className="usesTitle">
        <h1>what do I use?</h1>
      </div>
      <div className="usesContent">
        <h2>text editor & terminals</h2>
        {/* rainglow link https://rainglow.io/ */}
        <p>
          VS Code is my primary text editor. I use various themes from{" "}
          <a
            href="https://rainglow.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            RainGlow.io
          </a>
        </p>
        <p>Terminals are CMDer on Windows and iTerm on Mac</p>
        <br />
        <h2>software</h2>
        <p>Discord helps me keep in touch with most people</p>
        <p>Todoist helps me keep my life organized across multiple platforms</p>
        <p>
          Google Drive is where I keep documents and files for the most part
        </p>
        <br />
        <h2>hardware</h2>
        <p>My personal laptop is a 2017 13" Macbook Pro</p>
        <p>
          My personal desktop is a custom built rig that I use to run Windows
          and the occasional Linux
        </p>
        <p>My work laptop is an HP Zbook</p>
        <br />
        <h2>desk setup</h2>
        <p>Some sort of white Ikea desk</p>
        <a
          href="https://www.amazon.com/gp/product/B072M34RQC/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1"
          rel="noopener noreferrer"
          target="_blank"
        >
          HP 24" monitor
        </a>
        <p></p>
        <a
          href="https://www.razer.com/licensed-and-team-peripherals/stormtrooper-razer-atheris?gclid=CjwKCAiA6vXwBRBKEiwAYE7iS7nfuYv8BA2F9uVvmcIHKgobD3l6DD9Gc1yoPb9qa2asd5v_EU-LCxoC5-IQAvD_BwE#fo_c=2913&fo_k=4ad4008b530920834dba5e7028a859cc&fo_s=gplaus?utm_source=google&utm_medium=google-shopping&utm_campaign=_RS_TXN_BTM_US__TR"
          rel="noopener noreferrer"
          target="_blank"
        >
          Razer Atheris Stormtrooper mouse
        </a>
        <p>Razer keyboard of some sorts</p>
        <a
          href="https://www.amazon.com/gp/product/B06XCKGLTP/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
          rel="noopener noreferrer"
          target="_blank"
        >
          Fifine USB desk microphone
        </a>
        <p>Logitech HD webcam</p>
        <br />
        <h2>other</h2>
        <a
          href="https://www.amazon.com/Timbuk2-552-Armory-Pack-Black/dp/B01IXIU8RA/ref=sr_1_1?dchild=1&keywords=timbuk2+armory&qid=1579044665&sr=8-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          When travelling, I use this Timbuk2 Armory backpack
        </a>
      </div>
    </div>
  );
}
