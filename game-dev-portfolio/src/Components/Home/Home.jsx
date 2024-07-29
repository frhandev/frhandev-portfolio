import styles from "./Home.module.css";
import me from "../assets/logo.png";
import dc from "../assets/discord.png";
import yt from "../assets/youtube.png";
import x from "../assets/twitter.png";
import tk from "../assets/tik-tok.png";

function Home() {
    return (
        <section id="Home" className={styles.home}>
            <img className={styles.logo} src={me} alt="me" />
            <h1>Hello I'm Muhammed</h1>
            <h2>I'm a <span>Unity Game Developer</span> Developer</h2>
            <div className={styles.socials}>
                <a target='_blank' className={styles.socialIcon} href="https://www.youtube.com/@frhandev"><img src={yt} alt="Youtube" /></a>
                <a target='_blank' className={styles.socialIcon} href="https://www.tiktok.com/@frhan.dev"><img src={tk} alt="Tiktok" /></a>
                <a target='_blank' className={styles.socialIcon} href="https://www.twitter.com/frhandev"><img src={x} alt="Twitter" /></a>
                <a target='_blank' className={styles.socialIcon} href="https://discord.gg/xTxjQ5UyQV"><img src={dc} alt="Discord" /></a>
            </div>
        </section>
    );
}

export default Home;
