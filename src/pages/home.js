import React from "react";
import Herosection from "../components/herosection";
import Sponsors from "../components/sponsors";
import Community from '../components/community'
import Nfts from "../components/nfts";
import Modal from "../components/modal";

const Home = () => {
  return (
    <>
      <Modal />
      <Herosection />
      <Sponsors />
      <Community />
      <Nfts />
    </>
  );
};

export default Home;
