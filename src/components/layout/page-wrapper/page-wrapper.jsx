import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ children, ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage {...prop} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;