import styles from "./Sidebar.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SpaIcon from "@mui/icons-material/Spa";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import PsychologyIcon from "@mui/icons-material/Psychology";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.top}>
          <span className={styles.logo}>Admin</span>
        </div>
        <hr />
        <div className={styles.center}>
          <ul>
            <p className={styles.title}>MAIN</p>
            <span>
              <DashboardIcon className={styles.icon} />
              <li>Dashboard</li>
            </span>
            <p className={styles.title}>LISTS</p>
            <span>
              <PersonOutlineIcon className={styles.icon} />
              <li>Users</li>
            </span>
            <span>
              <StoreIcon className={styles.icon} />
              <li>Orders</li>
            </span>
            <span>
              <CreditCardIcon className={styles.icon} />
              <li>Products</li>
            </span>
            <span>
              <LocalShippingIcon className={styles.icon} />
              <li>Delivery</li>
            </span>
            <p className={styles.title}>USEFULL</p>
            <span>
              <BarChartIcon className={styles.icon} />
              <li>Stats</li>
            </span>
            <span>
              <NotificationsIcon className={styles.icon} />
              <li>Notifications</li>
            </span>
            <p className={styles.title}>SERVICES</p>
            <span>
              <SpaIcon className={styles.icon} />
              <li>System Health</li>
            </span>
            <span>
              <PsychologyIcon className={styles.icon} />
              <li>Logs</li>
            </span>
            <span>
              <SettingsIcon className={styles.icon} />
              <li>Settings</li>
            </span>
            <p className={styles.title}>USER</p>
            <span>
              <AccountBoxIcon className={styles.icon} />
              <li>Profile</li>
            </span>
            <span>
              <LogoutIcon className={styles.icon} />
              <li>Logout</li>
            </span>
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.colorOptions}></div>
          <div className={styles.colorOptions}></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
