import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import starList from '../../mocks/star-list';
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={starList} />
    </>
  );
}
