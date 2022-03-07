import React, { StrictMode, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function BackDrop() {
  
    const Content=()=>{
        return(
            <div className='back_drop'></div>
        )
    }
    
  return ReactDOM.createPortal(
    Content,
    document.getElementById('back_drop')
  )
}
