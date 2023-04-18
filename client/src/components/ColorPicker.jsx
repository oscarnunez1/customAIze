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
          '#FF00FF', '#00FFFF', '#FFD700', '#EE82EE', '#FF4500', '#ADFF2F', '#32CD32', '#BA55D3', '#FF1493', '#7FFF00'
        ]}
        onChange={(color) => state.color = color.hex}

      />
    </div>
  )
}

export default ColorPicker