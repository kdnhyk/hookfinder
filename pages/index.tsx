import styled from "styled-components";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hook finder</title>
      </Head>

      <Header />
      <Main />
    </>
  );
}
