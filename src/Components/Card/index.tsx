import React from 'react'
import './style.css'

export type CardProps = {
  color?: "green" | "blue" | "purple" | "red"
  children?: any
}

type HeaderProps = {
  children?: React.ReactNode
}

type ContentProps = {
  children?: React.ReactNode
}

function getColor(color: string) {
  if (color === "red") return "red"
  if (color === "green") return "green"
  if (color === "blue") return "blue"
  if (color === "purple") return "purple"

  return "red"
}

export function Card({ color, children }: CardProps) {
  return (
    <div className={`card ${getColor(color ?? '')}`}>
      {children}
    </div>
  )
}

Card.Header = ({ children }: HeaderProps) => (
  <div className='header'>
    <span className='title'>{children}</span>
  </div>
)

Card.Body = ({ children }: ContentProps) => (
  <div className='content'>
    {children}
  </div>
)