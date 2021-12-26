import React, { useState } from 'react'
import Hanna from './assistant/hanna'
import Navigation from './navigation'
// firebase
import firebase from '../../utils/firebase'
import { useNavigate } from 'react-router-dom'

function Home (props) {

    const { user, setReloapApp } = props
    const [currentTab, setCurrentTab] = useState('Home')
    const [startVoice, setStartVoice] = useState(false)

    const navigate = useNavigate()

    const logout = () => {
        firebase.auth().signOut()
        setTimeout(() => {
            navigate('/auth')
        }, 100)
    }

    return (
        <div className='codeally'>
            <Navigation user={user} setReloapApp={setReloapApp} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            <div className='codeally_content'>
                <CurrentScreen currentTab={currentTab} logout={logout}/>
                <button onClick={() => setStartVoice(!startVoice)}>voice</button>
            </div>
            <Hanna user={user} startVoice={startVoice} setStartVoice={setStartVoice} setCurrentTab={setCurrentTab}/>
        </div>
    )
}

export default Home

const CurrentScreen = ({ currentTab, logout }) => {
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
        return (
            <>
                <h1>Settings</h1>
                <button onClick={() => logout()}>Logout</button>
            </>
        )
    }
}