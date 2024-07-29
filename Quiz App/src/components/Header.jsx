import logoImg from "../assets/quiz-logo.png";
import Quiz from "./Quiz";
export default function Header() {
    return <header>
        <img src={logoImg} alt="Quiz logo" />
        <h1>ReactQuiz</h1>
        <Quiz />
    </header>
}