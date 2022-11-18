import React from 'react'
import { Link } from 'react-router-dom'
import { Cta } from '../../components/UI/Buttons/Cta'

export const Hello = () => {
  return (
    <div className="landing-page flex">
      <div className="landing-wrapper flex">
        <h1 className="title">Hello..</h1>
        <Link to="edit-bot">
          <Cta content="Create new Bot" />
        </Link>
      </div>
    </div>
  )
}
