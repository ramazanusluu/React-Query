import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link to="/parallel-queries">Home</Link>
          </li>
          <li>
            <Link to="/parallel-queries/manuel">Manuel Parallel Queries</Link>
          </li>
          <li>
            <Link to="/parallel-queries/dynamic">Dynamic Parallel Queries</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
