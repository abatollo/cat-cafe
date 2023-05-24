import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import gallery from '../../mocks/gallery';
import buyOptions from "../../mocks/buy-options";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper slides={gallery} buyOptions={buyOptions} />
    </>
  );
}
