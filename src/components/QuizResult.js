import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
       YOUR SCORE: {props.score} <br />
       TOTAL SCORE: {props.totalscore}
    </div>
    <button id='next-button' onClick={props.tryAgain}>TRY AGAIN</button>
    </>
  )
}

export default QuizResult
