import React,{useState} from 'react';
import Link from 'next/link';
import styles from '../../styles/Category.module.css';
import quizStyles from '../../styles/Quiz.module.css';
import questions from '../../data/questions.json'
const Quiz = () => {
    const [current,setCurrent] = useState(0);
    const [showresult,setShowresult] = useState(false);
    const [score,setScore] = useState(0);
    const [flag,setflag] = useState(null);

    const handleAnswerClick = (isCorrect) => {
        if(current === questions.questions.length - 1 )
            setShowresult(true);

        if(isCorrect) {
            setScore(score + 1)
            setflag('correct')
        }
        else 
            setflag('incorrect')

        setTimeout(() => {
            setflag(null)
            setCurrent(current + 1)
        }, 500);
    }


    return (
        <div  >
            <Link href="/" >
                <a className={styles.goBack}> &larr; Go Back</a>
            </Link>
            <h2>Play Quiz</h2>

            <div className={` ${quizStyles.app} ${
                                   flag === 'correct' ? quizStyles.correct
                                   : flag === 'incorrect' ? quizStyles.incorrect : null
                               }`}>
			{showresult ? (
				<div className={quizStyles.scoreSection}>
                    {score>2 ? `Congratulations...` : `Better Luck Next Time` }
                    <br /><br />
                    You scored {score} out of {questions.questions.length}</div>
			) : (
				<>
					<div className={quizStyles.questionSection}>
						<div className={quizStyles.questionCount}>
							<span>Question {questions.questions[current].id}</span>/{questions.questions.length}
						</div>
						<div className={quizStyles.questionText}>
                            {questions.questions[current].ques}
                        </div>
					</div>
					<div className={quizStyles.answerSection}>
                        {
                            questions.questions[current].ans.map((opt)=>{
                               return  <button className={quizStyles.btn}  key={opt.option}
                               onClick={()=> handleAnswerClick(opt.isCorrect)}
                               >{opt.option}</button>
                            })
                        }
					</div>
				</>
			)}
		</div>

        </div>
    )
}

export default Quiz;
