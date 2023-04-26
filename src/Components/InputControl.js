import React from 'react'
import { Alert } from 'reactstrap'

export default function InputControl(props) {
  return (
    <div className='input'>
        {props.label && <label>{props.label}</label>}
      <input type="text"{...props} />
    </div>
  )
}