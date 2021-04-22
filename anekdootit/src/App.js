import './App.css';
import React, { useState } from 'react'



function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * 5 ))
  }

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const vote = (index) => () => {
    const helper = [...votes]
    helper[index] += 1
    setVotes(helper)
  }

  const mostVoted = () => {
    let maxIndex = 0  
    for (let i = 1; i < votes.length; i++ ) {
      if (votes[i] > votes[maxIndex]) {
        maxIndex = i
      }
    }

    return anecdotes[maxIndex]
  }

  return (
    <>
      <p id="anecdote">{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote(selected)}>vote</button>
      <button onClick={randomAnecdote}>new anecdote</button>
      <h3>Anecdote with the most votes:</h3>
      <p>{mostVoted()}</p>

    </>
  );
}

export default App;
