import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import starList from '../../mocks/star-list';

export default function App() {
  return <PageWrapper stars={starList} />;
}
