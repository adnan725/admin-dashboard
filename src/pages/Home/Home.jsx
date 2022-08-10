import React from "react";
import styles from "./Home.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.homeContainer}>container</div>
      </div>
    </>
  );
};

export default Home;
