import Game from "./Game";
import styles from './Games.module.css'
import CQImg from './GameAssets/CaveQuest.jpg'
import ETMImg from './GameAssets/Escape The Matrix.png'
import GMImg from './GameAssets/Ghost Man.png'
import PPImg from './GameAssets/pp.png'
import DEDImg from './GameAssets/Dead End Dodge.png'
import MJImg from './GameAssets/unnamed.webp'
import MFImg from './GameAssets/MF.png'
import android from './GameAssets/android.png'
import windows from './GameAssets/windows.png'

export default function Games() {
    return (
        <section id="Games" className={styles.Games}>
            <h1>My Games</h1>
            <div className={styles.gameCarContainer}>
                <Game
                    gameIcon={CQImg}
                    gameTitle="Cave Quest"
                    gameLink="https://farhansama.itch.io/cave-quest"
                    platforms={[windows]}
                    gameDis={"2d platformer"} />

                <Game
                    gameIcon={ETMImg}
                    gameTitle="ETM"
                    gameLink="https://play.google.com/store/apps/details?id=com.frhandev.EscapeTheMatrix&pcampaignid=web_share"
                    platforms={[android]}
                    gameDis={"Avoid the falling obstacles"} />

                <Game
                    gameIcon={GMImg}
                    gameTitle="Ghost Man"
                    gameLink="https://farhansama.itch.io/ghost-man"
                    platforms={[windows]}
                    gameDis={"Pacman but You Are The Ghost"} />

                <Game
                    gameIcon={PPImg}
                    gameTitle="Puzzle Pals"
                    gameLink="https://farhansama.itch.io/puzzle-pals-the-great-escape"
                    platforms={[windows]}
                    gameDis={"Puzzle"} />

                <Game
                    gameIcon={DEDImg}
                    gameTitle="Dead End Dodge"
                    gameLink="https://farhansama.itch.io/Dead-End-Dodge"
                    platforms={[windows]}
                    gameDis={"Top-Down Shooter"} />

                <Game
                    gameIcon={MJImg}
                    gameTitle="Multiverse jump"
                    gameLink="https://play.google.com/store/apps/details?id=com.frhandev.Multiverse"
                    platforms={[android]}
                    gameDis={"Casual"} />

                <Game
                    gameIcon={MFImg}
                    gameTitle="MICRO FANTASY"
                    gameLink="https://farhansama.itch.io/micro-fantasy"
                    platforms={[windows, android]}
                    gameDis={"2d Platformer"} />
            </div>
        </section>
    )
}