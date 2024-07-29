import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <h2 className={styles.title}>Frhandev</h2>
      <ul className={styles.secTitles}>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Games">Games</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
