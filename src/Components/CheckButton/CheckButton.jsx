import React from 'react'
import cl from './CheckButton.module.css'

export const CheckButton = ({checkResult}) => {
  return (
    <button onClick={() => checkResult()} className={cl.btn}>Check Answers</button>
  )
}
