import styles from "./Skills.module.css";
import Skill from "./Skill";
import UC from "../assets/UC.jpg"
import { useState } from "react";

function Skills() {
    const [pos, setPos] = useState(0);

    const Animate = () => {
        if (window.scrollY >= 500) {
            setPos(1);
        } else {
            setPos(.5);
        }
    }

    const style = {
        transform: "scale(" + pos + ")",
        opacity: pos
    }

    window.addEventListener('scroll', Animate)

    return (
        <section className={styles.skills} id="Skills">

            <h1>Skills</h1>
            <div className={styles.skillsContainer}>
                <Skill skillName={"Unity"} perc={90} />
                <Skill skillName={"C#"} perc={90} />
                <Skill skillName={"Git&Github"} perc={90} />
                <br />
                <h1>Certificates</h1>
                <img style={style} src={UC} alt="certificate" />
            </div>
        </section>
    );
}

export default Skills;
