import styles from "./Skills.module.css";
import { useState } from "react";


function Skill({ skillName, perc }) {
    const [perci, setPerci] = useState(0);

    const style = {
        width: perci + "%"
    };

    const Animate = () => {
        if (window.scrollY >= 312) {
            setPerci(perc);
        }
    }

    window.addEventListener('scroll', Animate)

    return (
        <div className={styles.skill}>
            <h3 className={styles.skillName}>{skillName}:</h3>

            <div className={styles.skillBarContainer}>
                <div className={styles.skillBar}>
                    <div className={styles.skillPercintage} style={style}>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Skill;