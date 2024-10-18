

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:6{props.totalScrore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult