import React from 'react'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Controls(props) {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver)
    return (
        <div className={`controls`}>
            {/* left */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveLeft())
                }}>Left</button>

            {/* right */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveRight())
                }}>Right</button>

            {/* rotate */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(rotate())
                }}>Rotate</button>

            {/* down */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveDown())
                }}>Down</button>

        </div>
    )
}
