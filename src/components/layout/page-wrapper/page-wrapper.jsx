import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";

function PageWrapper() {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;