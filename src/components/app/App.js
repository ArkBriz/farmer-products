import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import advantagesList from "../../mocks/mock";

function App() {
  return <PageWrapper advantages={advantagesList}/>;
}

export default App;