import React from 'react'
import taskmate from '../assets/taskmate.png'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={taskmate} alt="taskmate"/>
            <span>TaskMate</span>
        </div>
        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark activeTheme"></span>
            <span className="gradientOne"></span>
            <span className="gradientTwo"></span>
            <span className="gradientThree"></span>
        </div>
    </header>
  )
}

export default Header
