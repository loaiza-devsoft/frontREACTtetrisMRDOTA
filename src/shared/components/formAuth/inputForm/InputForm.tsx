import React from 'react'
import "./inputForm.css"

interface Props{
  type: string,
  placeholder: string
}

export default function InputForm(props: Props) {

  const {type, placeholder} = props;

  return (
    <input className='inputForm__input' type={type} placeholder={placeholder} />
  )
}
