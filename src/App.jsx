import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaPlusCircle } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";

function App() {
  const [ShowText1, setShowdata1] = useState("")
  const [ShowText2, setShowdata2] = useState("")
  const [ShowText3, setShowdata3] = useState("")

 function openDiv1() {
  setShowdata1(show=>!show)
  setShowdata2(false)
  setShowdata3(false)
  
 }
 function openDiv2() {
  setShowdata2(show=>!show)
  setShowdata1(false)
  setShowdata3(false)
  
 }
 function openDiv3() {
  setShowdata3(show=>!show)
  setShowdata1(false)
  setShowdata2(false)
  
 }

  

  return (
    <>
    <div id='parent'>
        <div id='head'>
          <div><h3>heading1</h3></div>
          <span onClick={openDiv1}>{ShowText1?<FiMinusCircle />:<FaPlusCircle />}</span>
        </div>
        <p id='para' style={{ display: ShowText1 ? 'block' : 'none' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio rerum asperiores ut assumenda ex rem fuga quaerat, unde omnis!
        </p>
      </div>

      <div id='parent'>
        <div id='head'>
          <div><h3>heading2</h3></div>
          <span onClick={openDiv2}>{ShowText2?<FiMinusCircle />:<FaPlusCircle />} </span>
        </div>
        <p id='para' style={{ display: ShowText2 ? 'block' : 'none' }}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio rerum asperiores ut assumenda ex rem fuga quaerat, unde omnis!
        </p>
      </div>

      <div id='parent'>
        <div id='head'>
          <div><h3>heading3</h3></div>
          <span onClick={openDiv3}>{ShowText3?<FiMinusCircle />:<FaPlusCircle />}</span>
        </div>
        <p id='para' style={{ display: ShowText3 ? 'block' : 'none' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio rerum asperiores ut assumenda ex rem fuga quaerat, unde omnis!
        </p>
      </div>
    </>
  )
}

export default App
