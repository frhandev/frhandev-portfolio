import { useState } from 'react';
import '../index.css'


export default function ScrollBar() {
    const [width, setWidth] = useState(0)

    const Animate = () => {
        setWidth((window.scrollY * 100) / 2458);
    }

    const style = {
        width: width + "%",
        backgroundColor: "#4f648f",
        height: "20px",
    }

    window.addEventListener('scroll', Animate)

    return (
        <div id='scrollBar' >
            <div style={style}></div>
        </div>
    )
}