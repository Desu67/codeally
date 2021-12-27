import React, { useState } from 'react'
import Hanna from './assistant/hanna'
import Navigation from './navigation'
import Settings from './user/pages/settings'

function Home (props) {

    const { user, setReloapApp } = props
    const [currentTab, setCurrentTab] = useState('Home')
    const [startVoice, setStartVoice] = useState(false)

    return (
        <div className='codeally'>
            <Navigation user={user} setReloapApp={setReloapApp} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            <div className='codeally_content'>
                <CurrentScreen currentTab={currentTab} user={user} setReloapApp={setReloapApp}/>
                <button onClick={() => setStartVoice(!startVoice)}>voice</button>
            </div>
            <Hanna user={user} startVoice={startVoice} setStartVoice={setStartVoice} setCurrentTab={setCurrentTab}/>
        </div>
    )
}

export default Home

const CurrentScreen = ({ currentTab, user, setReloapApp }) => {
    if(currentTab === "Home"){
        return <h1>Home</h1>
    }
    if(currentTab === "Movies"){
        return <h1>Movies</h1>
    }
    if(currentTab === "Music"){
        return <h1>Music</h1>
    }
    if(currentTab === "Games"){
        return <h1>Games</h1>
    }
    if(currentTab === "Books"){
        return <h1>Books</h1>
    }
    if(currentTab === "Settings"){
        return <Settings user={user} setReloapApp={setReloapApp}/>
    }
}