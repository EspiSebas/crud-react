import React from 'react'

export const Propiedades = (props) => {
  return (
    <div>
        <ul>
            {props.text}
        </ul>
        <ul>
            {props.age}
        </ul>
        <ul>
            {props.name}
        </ul>
        <ul>
            {props.age + props.age1}
        </ul>
    </div>
  )
}
