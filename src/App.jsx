import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Do from './Do'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors =["fakhim","roton","bijoy","oibbba"]
  const singers = [
    {name: "masuddah", age :"23"},
    {name: "Bristi", age :"21"},
    {name: "Oibbah", age :"23"},
    {name: "Botki", age :"23"}
  ]
  return (
    <>

      <h1>Vite + React</h1>
      {/* object */}      
      <h4>Object with .map()</h4>
      {singers.map(singer=><Singer singer={singer}></Singer>)}

      <hr />
      {/* array */}
      <h4>Array with .map()</h4>
      <Actor name={"masud"}></Actor>
      {actors.map(actor=><Actor name={actor}></Actor>)}
      
      <hr />
      <h4>conditions + ( ternary ,&& ,||)</h4>
      <Do task="Learn React" isDone={false}></Do>
         <Do task="Learn JS" isDone={false}></Do>
        <Do task="Learn CSS" isDone={true}></Do>

    <hr />
      <Device name="laptop" price="150k"></Device>
      <Device name="Mobile" price="40k"></Device>
      
      <hr />
      <h4>style on other page</h4>
      <Student score="98+"></Student> 

       <hr />
      <h4>Style in line</h4>
      <Developer></Developer> 
    </>
  )
}

function Device(props){
  // console.log(props);
  return(
    <div>
      <h3>Device : {props.name}</h3>
      <h5>Price : {props.price}</h5>
    </div>
  )
}


function Student(props) {
  const student = { class: "ten", age: 17 }
  return (
    <div className="student">
      <p>i am a student </p>
      <p>age : {student.age}</p>
      <p>class : {student.class}</p>
      <p>score : {props.score}</p>
    </div>
  )
}

// css style system
function Developer() {
  const styleProperty = {
    color: 'aqua',
    border: '2px solid tomato',
    margin: '25px',
    borderRadius: '20px'
  }
  return (
    // <div style={styleProperty}>
    <div style={{
      color: 'aqua',
      border: '2px solid tomato',
      margin: '25px',
      borderRadius: '20px'
    }}>
      <h3>Developer </h3>
      <p>practice react  </p>
    </div>
  )
}

export default App
