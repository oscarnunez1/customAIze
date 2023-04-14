import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store'

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  
  const snap = useSnapshot(state)

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff',
      }
    }
  }

  return (
    <button 
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick} // on click, the snap.intro on home sets to fault and fades left.
    >
      {title}
    </button>
  )
}

export default CustomButton