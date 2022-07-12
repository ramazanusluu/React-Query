import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function CancelNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link to="/cancellation">Home</Link>
          </li>
          <li>
            <Link to="/query-cancel">Query Cancel</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CancelNav;
