import {questions} from "./triviaquestions.js"

export class Trivia {
    static questions = questions;
    static getRandomQuestion() {
        let random = Math.floor(Math.random() * questions.length);
        return questions[random];
    }
}