import '../index.css'
import dc from "./assets/discord.png";
import yt from "./assets/youtube.png";
import x from "./assets/twitter.png";
import tk from "./assets/tik-tok.png";

export default function Footer() {
    const date = new Date;
    return (
        <footer>
            <strong>{date.getFullYear()} &copy; Frhandev</strong>
            <div className="socials">
                <a target='_blank' href="https://www.youtube.com/@frhandev"><img src={yt} alt="Youtube" /></a>
                <a target='_blank' href="https://www.tiktok.com/@frhan.dev"><img src={tk} alt="Tiktok" /></a>
                <a target='_blank' href="https://www.twitter.com/frhandev"><img src={x} alt="Twitter" /></a>
                <a target='_blank' href="https://discord.gg/xTxjQ5UyQV"><img src={dc} alt="Discord" /></a>
            </div>
        </footer>
    )
}