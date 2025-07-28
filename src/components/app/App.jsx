import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import React from "react";

import "./App.css";
import Father from "../dad";
import Mother from "../mom";
import EldestBrother from "../eldest brother";
import OlderBrother from "../older brother";
import Sister from "../sister";
import Me from "../me";

function App() {
  return (
    <div className="main-folder">
      <Father />
      <Mother />
      <EldestBrother />
      <OlderBrother />
      <Sister />
      <Me />
    </div>
  );
}

export default App;
