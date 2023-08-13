import React from 'react'
import './style.css'

export function Inputs({type, texts , flag, setValue, credentials, name}) {
  return (
    <div className='input-groups'>
        <input type={type} value={credentials} onChange={(e)=>setValue(e, name)} required/>
        <span className='label'>{texts} {flag?"*":""}</span>
    </div>
  )
}

