import styles from "./Widget.module.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const percentage = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        allUsers: "See all users",
        icon: (
          <PersonOutlineIcon
            className={styles.icon}
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;

    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        allUsers: "See all orders",
        icon: (
          <LocalShippingIcon
            className={styles.icon}
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;

    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        allUsers: "See all earnings",
        icon: (
          <MonetizationOnIcon
            className={styles.icon}
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        allUsers: "See all balance",
        icon: (
          <MonetizationOnIcon
            className={styles.icon}
            style={{
              color: "crimson",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <>
      <div className={styles.widgets}>
        <div className={styles.left}>
          <span className={styles.users}>{data.title}</span>
          <span className={styles.counter}>
            {amount} {data.isMoney && "$"}
          </span>
          <span className={styles.link}>{data.allUsers}</span>
        </div>
        <div className={styles.right}>
          <span className={`${styles.percentage} ${styles.positive}`}>
            <KeyboardArrowUpIcon />
            {percentage}%
          </span>
          <span>{data.icon}</span>
        </div>
      </div>
    </>
  );
};

export default Widget;
