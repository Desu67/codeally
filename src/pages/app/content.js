import React, { useState } from 'react'
import Hanna from './assistant/hanna'
import Navigation from './navigation'
// pages
import Apps from './user/pages/apps'
import Movies from './user/pages/movies'
import Music from './user/pages/music'
import Games from './user/pages/games'
import Books from './user/pages/books'
import Settings from './user/pages/settings'

function Home (props) {

    const { user, setReloapApp } = props
    const [currentTab, setCurrentTab] = useState('Home')
    const [startVoice, setStartVoice] = useState(false)

    return (
        <div className='codeally'>
            <Navigation user={user} setReloapApp={setReloapApp} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            <div className='codeally_content'>
                <CurrentScreen currentTab={currentTab} user={user} setReloapApp={setReloapApp} startVoice={startVoice} setStartVoice={setStartVoice}/>
            </div>
            <Hanna user={user} startVoice={startVoice} setStartVoice={setStartVoice} setCurrentTab={setCurrentTab}/>
        </div>
    )
}

export default Home

const CurrentScreen = ({ currentTab, user, setReloapApp, startVoice, setStartVoice }) => {
    if(currentTab === "Home"){
        return <Apps user={user} startVoice={startVoice} setStartVoice={setStartVoice}/>
    }
    if(currentTab === "Movies"){
        return <Movies user={user} startVoice={startVoice} setStartVoice={setStartVoice}/>
    }
    if(currentTab === "Music"){
        return <Music user={user} startVoice={startVoice} setStartVoice={setStartVoice}/>
    }
    if(currentTab === "Games"){
        return <Games user={user} startVoice={startVoice} setStartVoice={setStartVoice}/>
    }
    if(currentTab === "Books"){
        return <Books user={user} startVoice={startVoice} setStartVoice={setStartVoice}/>
    }
    if(currentTab === "Settings"){
        return <Settings user={user} setReloapApp={setReloapApp}/>
    }
}