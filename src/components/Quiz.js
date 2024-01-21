import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';

function Quiz() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore]=useState(0);
  const [click,setClick] =useState(0);
  const [showResult,setShowResult]=useState(false);
  const changeQuestion =()=>{
    UpdateScore();
    if(currentQuestion<QuizData.length-1){
      setCurrentQuestion(currentQuestion+1);
      setClick(0);

    }else{
       setShowResult(true)
    }
  }
  const UpdateScore =()=>{
    if(click===QuizData[currentQuestion].answer){
      setScore(score+1);
    }
  }
  const resetAll =()=>{
    setShowResult(false);
    setCurrentQuestion(0);
    setClick(0);
    setScore(0);
  }
  return (
    <div>
        <p className='heading-txt'>QUIZ APP</p>
         <div className='container'>
          {showResult ? (
            <QuizResult score={score} totalscore={QuizData.length} tryAgain={resetAll}/>
          ):(
            <>
              <div className='question'>
                  <span className='question-number'>
                    {currentQuestion+1}.
                  </span>
                  <span className='question-txt'>
                    {QuizData[currentQuestion].question}
                  </span>
              </div>
              <div className='option-container'>
                    {QuizData[currentQuestion].options.map((option,i)=>{
                      return (
                        <button className={`option-btn ${
                          click==i+1?"checked":null
                        }`} key={i} onClick={()=>setClick(i+1)}>
                          {option}
                        </button>
                      )
                    })}
              </div>
              <button id='next-button' onClick={changeQuestion}>NEXT</button>
              </>)}
         </div>
                         
    </div>
  )
}

export default Quiz
