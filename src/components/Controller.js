// import React, { useState } from 'react'

function Controller(props) {

  console.log(props.selected);

  return (    
    <div>
      <button onClick={() => props.selectedButton(true)}>Expandir</button>
      <button onClick={() => props.selectedButton(false)}>Colapsar</button>
    </div>
  )
}


export default Controller