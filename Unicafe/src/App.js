
import React, {useState} from 'react'


const Statistics = (props) => {
  if (props.reviewSum === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
    <h2>statistics:</h2>
    <table>
      <tbody>
          <tr>
            <td><StatisticLine text="good" value={props.goodReview} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="neutral" value={props.neutralReview} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="bad" value={props.badReview} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="all" value={props.reviewSum} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" value={props.average} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="positive" value={props.positive} /></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Button = ({text, onClick}) => {
  return (
    <>
      <button id={text} onClick={onClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  if (text==="positive") {
    return (
      <>
        <p>{text} {value}%</p>
      </>
    )
  }
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

function App() {
  const [goodReview , setGoodReview] = useState(0)
  const [badReview, setBadReview] = useState(0)
  const [neutralReview, setNeutralReview] = useState(0)

  const handleGood = () => setGoodReview(goodReview + 1)
  const handleBad = () => setBadReview(badReview + 1)
  const handleNeutral = () => setNeutralReview(neutralReview + 1)

  let reviewSum = goodReview + badReview + neutralReview
  let average = (goodReview - badReview) / reviewSum
  let positive = goodReview / reviewSum * 100

  return (
    <div>
      <h2>Give feedback:</h2>
      <Button text="good" onClick={handleGood}>good</Button>
      <Button text="neutral" onClick={handleNeutral}>neutral</Button>
      <Button text="bad" onClick={handleBad}>bad</Button>
      <Statistics goodReview={goodReview} badReview={badReview} neutralReview={neutralReview} reviewSum={reviewSum} average={average} positive={positive} />
    </div>
  );
}

export default App;
