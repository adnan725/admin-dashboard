import styles from "./Navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.search}>
            <input type="text" placeholder="Search..." />
            <SearchIcon className={styles.icon} />
          </div>
          <div className={styles.items}>
            <div className={`${styles.item} ${styles.language}`}>
              <LanguageIcon className={styles.icon} />
              <span>English</span>
            </div>
            <div className={styles.item}>
              <DarkModeIcon className={styles.icon} />
            </div>
            <div className={styles.item}>
              <FullscreenExitIcon className={styles.icon} />
            </div>
            <div className={styles.item}>
              <NotificationsIcon className={styles.icon} />
            </div>
            <div className={styles.item}>
              <ChatBubbleIcon className={styles.icon} />
            </div>
            <div className={styles.item}>
              <ListIcon className={styles.icon} />
            </div>
            <div className={styles.item}>
              <img src={process.env.PUBLIC_URL + "/adnan.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
