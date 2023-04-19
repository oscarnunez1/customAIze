// ColorPicker allows user to pick color of shirt
import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {

  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          "#3A579A",
          "#F76C4D",
          "#29A745",
          "#D8A0C4",
          "#4D9CF7",
          "#ECBE13",
          "#8D4F88",
          "#1D7C54",
          "#F55E10",
          "#96AABF"
        ]}
        onChange={(color) => state.color = color.hex}

      />
    </div>
  )
}

export default ColorPicker