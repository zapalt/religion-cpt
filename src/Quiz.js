import { useState } from "react";
import { Pane } from "./elements/Card";

function Quiz() {
    const questions = [
        {
            questionText: 'What is the world\'s largest monotheistic religion?',
            answerOptions: [
                { answerText: 'Islam', isCorrect: false },
                { answerText: 'Judaism', isCorrect: false },
                { answerText: 'Christianity', isCorrect: true },
                { answerText: 'Hinduism', isCorrect: false },
            ],
        },
        {
            questionText: 'Which monotheistic religion was formally founded first?',
            answerOptions: [
                { answerText: 'Islam', isCorrect: false },
                { answerText: 'Hinduism', isCorrect: false },
                { answerText: 'Christianity', isCorrect: false },
                { answerText: 'Judaism', isCorrect: true },
            ],
        },
        {
            questionText: 'What is Martin Luther known for in the Christian faith?',
            answerOptions: [
                { answerText: 'Protestant Reformation', isCorrect: true },
                { answerText: 'Council of Nicaea', isCorrect: false },
                { answerText: 'Mormonism', isCorrect: false },
                { answerText: 'Formation of the Anglican Church', isCorrect: false },
            ],
        },
        {
            questionText: 'What two sacraments do Protestant Churches usually practice?',
            answerOptions: [
                { answerText: 'Baptism and Eucharist', isCorrect: true },
                { answerText: 'Anointing & Penance', isCorrect: false },
                { answerText: 'Baptism & Anointing', isCorrect: false },
                { answerText: 'Penance & Baptism', isCorrect: false },
            ],
        },
        {
            questionText: 'Which Christian denomination was the result of the King of England wanting a divorce?',
            answerOptions: [
                { answerText: 'Presbyterian', isCorrect: true },
                { answerText: 'Jehovah\'s Witness', isCorrect: false },
                { answerText: 'Evangelical', isCorrect: false },
                { answerText: 'Anglican', isCorrect: true },
            ],
        },
        {
            questionText: 'What are the three Solas of protestantism?',
            answerOptions: [
                { answerText: 'Sola Cogito, Sola Fide, Sola Vici', isCorrect: false },
                { answerText: 'Sola Gratia, Sola Scriptura, Sola Cogito', isCorrect: false },
                { answerText: 'Sola Fide, Sola Gratia, Sola Scriptura', isCorrect: true },
                { answerText: 'Sola Verba, Sola Gratia, Sola Scriptura', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following pillars of Islam represent the practice of praying?',
            answerOptions: [
                { answerText: 'Salat', isCorrect: true },
                { answerText: 'Hajj', isCorrect: false },
                { answerText: 'Sawm', isCorrect: false },
                { answerText: 'Shahadah', isCorrect: false },
            ],
        },
        {
            questionText: 'How did the division between Sunni and Shi\'a Islam first form?',
            answerOptions: [
                { answerText: 'Differences in interpreations of scripture', isCorrect: false },
                { answerText: 'Disagreement over how Muslims should handle finance', isCorrect: false },
                { answerText: 'Disagreement over leadership after Muhammad\'s death', isCorrect: true },
                { answerText: 'Pre-existing conflict', isCorrect: false },
            ],
        },
        {
            questionText: 'How many days after birth are Jewish boys typically circumcised?',
            answerOptions: [
                { answerText: '1 day', isCorrect: false },
                { answerText: '3 days', isCorrect: false },
                { answerText: '5 days', isCorrect: false },
                { answerText: '8 days', isCorrect: true },
            ],
        },
        {
            questionText: 'How many sections are there in the Jewish Tanakh?',
            answerOptions: [
                { answerText: '3', isCorrect: true },
                { answerText: '10', isCorrect: false },
                { answerText: '613', isCorrect: false },
                { answerText: '5', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);
    const [lastS, setLastS] = useState(0);
    const handleAnswerButtonClick = (isCorrect) =>
    {
        if (isCorrect === true)
        {
            setScore(score + 1);
            setLastS(1);
        }
        else
        {
            setLastS(2);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    let info;
    if (lastS == 0)
    {
        info = <div></div>
    }
    else if (lastS == 1) {
        info = <div class="bg-green-500 text-sm text-white rounded-md p-4" role="alert">
            <span class="font-bold">Correct!</span>
        </div>
    }
    else
    {
        info = <div class="bg-red-500 text-sm text-white rounded-md p-4" role="alert">
            <span class="font-bold">Incorrect</span>
        </div>
    }

    return (
        <Pane>
            <h1 class="font-Unbounded font-bold text-2xl">Trivia</h1>
            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div class="text-gray-400" className='question-count'>
                            Question <b><span>{currentQuestion + 1}</span>/{questions.length}</b>
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section' class="grid grid-flow-row grid-cols-2 p-5 gap-3">
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
                    </div>
                    {info}
                </>
            )}
        </Pane>
    );
}

export default Quiz