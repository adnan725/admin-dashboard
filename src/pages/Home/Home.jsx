import React from "react";
import styles from "./Home.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widgets from "../../components/Widgets/Widgets";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.homeContainer}>
          <Navbar />
          <div className={styles.widgets}>
            <Widgets type="users" />
            <Widgets type="orders" />
            <Widgets type="earnings" />
            <Widgets type="balance" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
