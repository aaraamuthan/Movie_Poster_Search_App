import React from "react"

const Header = (props) => {
  return (
    <header>
      <h2 className="main-header">{props.text}</h2>

      <p className="description">Search for an movie poster</p>
    </header>
  )
}

export default Header