import Container from "../Container";

import logo from "../../assets/logo.png";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <Container>
      <img className={styles.image} src={logo} alt="Logo_Test" />
      <ul className={styles.header_menu}>
        <li className={styles.header_menu_item}>Home</li>
        <li className={styles.header_menu_item}>Best seller</li>
        <li className={styles.header_menu_item}>Promotion</li>
        <li className={styles.header_menu_item}>Categories</li>
      </ul>
    </Container>
  );
}
