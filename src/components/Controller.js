// import React, { useState } from 'react'

function Controller(props) {



  return (    
    <div>
      <button onClick={() => props.selectedButton(true)}>Expandir</button>
      <button onClick={() => props.selectedButton(false)}>Colapsar</button>
    </div>
  )
}


export default Controller