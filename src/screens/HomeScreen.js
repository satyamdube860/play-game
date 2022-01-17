import React from "react";
import Header from "../components/header";
import ScoreTable from "../components/scoreTable";
import Modal from "../components/modal";
import Footer from "../components/footer";
const HomeScreen = () => {
  return (
    <div>
      <Header />
      <ScoreTable />

      <div style={{ margin: "30px" }}>
        <Modal />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
