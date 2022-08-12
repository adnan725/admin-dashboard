import styles from "./Featured.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <>
      <div className={styles.featured}>
        <div className={styles.top}>
          <h2 className={styles.title}>Total revenue</h2>
          <MoreVertIcon className={styles.icon} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.featuredChart}>
            <CircularProgressbarWithChildren
              value={70}
              text="70%"
              strokeWidth={3}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.title}>Total slaes made today</p>
            <p className={styles.amount}>$420</p>
            <p className={styles.description}>
              Previous transections processing. Last payment may not be
              included.
            </p>
            <div className={styles.summary}>
              <div className={styles.item}>
                <div className={styles.itemTitle}>
                  <p>Target</p>
                </div>
                <div className={`${styles.itemResult} ${styles.negative}`}>
                  <KeyboardArrowDownIcon />
                  <p className={styles.resultAmount}>$12.4k</p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemTitle}>
                  <p>Last week</p>
                </div>
                <div className={`${styles.itemResult} ${styles.positive}`}>
                  <KeyboardArrowUpIcon />
                  <p className={styles.resultAmount}>$12.4k</p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemTitle}>
                  <p>Last month</p>
                </div>
                <div className={`${styles.itemResult} ${styles.positive}`}>
                  <KeyboardArrowUpIcon />
                  <p className={styles.resultAmount}>$12.4k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
