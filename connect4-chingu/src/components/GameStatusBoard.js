//Main Imports
import React from 'react'

//Style Imports
import '../styles/gameStatusBoard.css'

//Setup for P1 and P2
let playerBar = 'Player 1, please select a space for your coin'

const GameStatusBoard = () => {
  return (
    <div className='gameStatusBoardWrap'>
        <div className='gameStatusBar'>
            <p>{playerBar}</p>
        </div>
        <div className='gameBoard'>
          
        </div>
    </div>
  )
}

export default GameStatusBoard