
import { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import './App.css'

function App() {
  const [showText, setDataShow] = useState(null);

  const toggleSection = (section) => {
    setDataShow(prev => (prev === section ? null : section));
  };

  return (
    <>
      <div id='parent'>
        <div id='head'>
          <div><h3>heading1</h3></div>
          <span onClick={() => toggleSection(1)}><FaPlusCircle /></span>
        </div>
        <p id='para' style={{ display: showText === 1 ? 'block' : 'none' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio rerum asperiores ut assumenda ex rem fuga quaerat, unde omnis!
        </p>
      </div>

      <div id='parent'>
        <div id='head'>
          <div><h3>heading2</h3></div>
          <span onClick={() => toggleSection(2)}><FaPlusCircle /></span>
        </div>
        <p id='para2' style={{ display: showText === 2 ? 'block' : 'none' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio rerum asperiores ut assumenda ex rem fuga quaerat, unde omnis!
        </p>
      </div>

      <div id='parent'>
        <div id='head'>
          <div><h3>heading3</h3></div>
          <span onClick={() => toggleSection(3)}><FaPlusCircle /></span>
        </div>
        <p id='para3' style={{ display: showText === 3 ? 'block' : 'none' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio rerum asperiores ut assumenda ex rem fuga quaerat, unde omnis!
        </p>
      </div>
    </>
  )
}

export default App;