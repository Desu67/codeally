import React from 'react'

function Apps(props) {

    const { user, startVoice, setStartVoice } = props

    return (
        <div className='chat'>
            <div className='users'>
                <input placeholder='Search'/>
                <h1>User001</h1>
                <h1>User002</h1>
                <h1>User003</h1>
            </div>

            <div className='chat_box'>
                <input placeholder='message here...'/>

            </div>
        </div>
    )
}

export default Apps