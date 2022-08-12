import React from "react";
import styles from "./Home.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widgets from "../../components/Widgets/Widgets";
import Chart from "../../components/Chart/Chart";
import Featured from "../../components/Featured/Featured";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.homeContainer}>
          <Navbar />
          <Widgets />
          <div className={styles.containerData}>
            <Featured />
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
