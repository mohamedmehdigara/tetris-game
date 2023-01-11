import React from 'react'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Controls(props) {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.isRunning)
    return (
        <div className="controls">
            {/* left */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveLeft())
            }}>Left</button>

            {/* right */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveRight())
            }}>Right</button>

            {/* rotate */}
            <button className="control-button" onClick={(e) => {
                dispatch(rotate())
            }}>Rotate</button>

            {/* down */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveDown())
            }}>Down</button>

        </div>
    )
}