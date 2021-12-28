import React from 'react'

function Apps(props) {

    const { user, startVoice, setStartVoice } = props

    return (
        <div>
            <h1>Apps</h1>
            <button onClick={() => setStartVoice(!startVoice)}>{startVoice ? 'Stop' : 'Start'}</button>
        </div>
    )
}

export default Apps