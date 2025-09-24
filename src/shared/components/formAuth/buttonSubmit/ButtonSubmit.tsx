import React from 'react'
import "./buttonSubmit.css"

interface Props{
    type?: "submit" | "button" | "reset",
    textButton: string
}

export default function ButtonSubmit(props: Props) {

    const {type, textButton} = props;

  return (
    <button className='buttonSubmit__button' type={type}>{textButton}</button>
  )
}
