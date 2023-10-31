import { React } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import TabsContainer from "./TabsContainer";

export const metadata = {
  title: 'Groww Stocks',
  description:
    'Groww Stock Market Application',
};

export default function Explore() {

  return (
    <>
      <Head>
        <title>Groww Stocks</title>
      </Head>
      <Navbar />
      <TabsContainer />
    </>
  );
}
