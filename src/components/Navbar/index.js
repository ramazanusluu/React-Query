import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example">Basic</Link>
          </li>
          <li>
            <Link to="/clean-code">Clean Code</Link>
          </li>
          <li>
            <Link to="/infinite">Infinite Queries</Link>
          </li>
          <li>
            <Link to="/parallel-queries">Parallel Queries</Link>
          </li>
          <li>
            <Link to="/cancellation">Query Cancellation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
