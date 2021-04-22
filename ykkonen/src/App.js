import {useState} from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part sisalto={props.parts[0]} />
      <Part sisalto={props.parts[1]} />
      <Part sisalto={props.parts[2]} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.sisalto.name} {props.sisalto.exercises}</p>
    </>
  )
}


const Total = (props) => {
  return (
    <>
      <p>Number of excersises {props.yhteensa}</p>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {  
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total yhteensa={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App