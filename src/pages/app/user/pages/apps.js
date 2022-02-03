import React from 'react'

function Apps(props) {

    const { user, startVoice, setStartVoice } = props

    return (
        <div className='chat'>
            <div className='chat_box'>
                <input placeholder='message here...'/>

            </div>
        </div>
    )
}

export default Apps