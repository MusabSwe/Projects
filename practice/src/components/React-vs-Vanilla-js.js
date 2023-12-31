import { useState } from "react";
import "../style.css";
import logo from "../logo.svg"

const ReactVsVanillaJs = () => {
    const [activeBtn, setActiveBtn] = useState(0);
    const content = [
        [
            "React is extremely popular",
            "It makes building complex, interactive UIs a breeze",
            "It's powerful & flexible",
            "It has a very active and versatile ecosystem"
        ],
        [
            "Components, JSX & Props",
            "State",
            "Hooks (e.g., useEffect())",
            "Dynamic rendering"
        ],
        [
            "Official web page (react.dev)",
            "Next.js (Fullstack framework)",
            "React Native (build native mobile apps with React)"
        ],
        [
            "Official web page (react.dev)",
            "Next.js (Fullstack framework)",
            "React Native (build native mobile apps with React)"
        ]
    ];

    return (
        <div>
            <header>
                <img src={logo} alt="React logo" />
                <div>
                    <h1>React.js</h1>
                    <p>i.e., using the React library for rendering the UI</p>
                </div>
            </header>
            <div id="tabs">
                <menu>
                    <button
                        className={activeBtn === 0 ? "active" : ""}
                        onClick={() => { setActiveBtn(0) }}
                    >
                        Why React?
                    </button>
                    <button
                        className={activeBtn === 1 ? "active" : ""}
                        onClick={() => { setActiveBtn(1) }}
                    >
                        Core Features
                    </button>
                    <button
                        className={activeBtn === 2 ? "active" : ""}
                        onClick={() => { setActiveBtn(2) }}
                    >
                        Related Resources
                    </button>
                    <button
                        className={activeBtn === 3 ? "active" : ""}
                        onClick={() => { setActiveBtn(3) }}
                    >
                        React vs JS
                    </button>
                </menu>
                <div id="tab-content">
                    <ul>
                        {content[activeBtn]?.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ReactVsVanillaJs;