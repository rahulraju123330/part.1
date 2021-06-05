import React from 'react'




const Header = (props) => {
  

  return (
     <div>
       <p>
          Name of the course is{props.course}
       </p>
     </div>
  )
}

const Content = (props) => {
  return (
     <div>
       <p>
         {props.part1} {props.exercises1}
         {props.part2} {props.exercises2}
         {props.part3} {props.exercises3}
       </p>
     </div>
  )
}

const Total = (props) => {
  return (
     <div>
       <p>
         no.of exercise={props.exercises1 + props.exercises2 + props.exercises3}
       </p>
     </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 =  'no of exercises 10'
  const part2 = 'Using props to pass data'
  const exercises2 =  'no of exercises 7'
  const part3 = 'State of a component'
  const exercises3 =  'no of exercises 14'


  return (
    <div>
      <Header course={course}  />
      <Content part1={part1}  exercises1={exercises1}  />
      <Content  part2={part2} exercises2={exercises2}/>
      <Content  part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1}  exercises2={exercises2}  exercises3={exercises3} />
    </div>
  )
}



export default App
