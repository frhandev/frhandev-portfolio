import styles from './Games.module.css'

export default function Game({
    gameIcon,
    gameTitle = "game",
    gameLink = "https://farhansama.itch.io/",
    platforms,
    gameDis
}) {
    const listItems = platforms.map((platform) =>
        <img src={platform} alt="game icon" />
    );
    return (
        <div className={styles.gameCard}>
            <img className={styles.gameIcon} src={gameIcon} alt="game icon" />
            <h3 className={styles.gameTitle}>{gameTitle}</h3>
            <strong>{gameDis}</strong>

            <a target='_blank' href={gameLink}><div className={styles.platformContainer}>
                {listItems}
            </div>Download</a>
        </div>
    )
}