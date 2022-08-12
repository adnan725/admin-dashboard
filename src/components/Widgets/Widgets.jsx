import Widget from "../../components/Widget/Widget";
import styles from "./Widgets.module.scss";

const Widgets = () => {
  return (
    <>
      <div className={styles.widgets}>
        <Widget type="users" />
        <Widget type="orders" />
        <Widget type="earnings" />
        <Widget type="balance" />
      </div>
    </>
  );
};

export default Widgets;
