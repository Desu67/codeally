import React, { useEffect, useState } from 'react'
// pages
import Apps from './apps'
import Error from '../web/pages/error'
// axios
import Axios from 'axios'
// firebase
import firebase from '../../utils/firebase'
// routes
import { Routes, Route, useNavigate } from 'react-router-dom'
// images
import icon_codeally from '../../assets/icon.png'

function Codeally(props) {

    const { user } = props

    const navigate = useNavigate()

    const logout = () => {
        firebase.auth().signOut()
        setTimeout(() => {
            navigate('/auth')
        }, 500)
    }

    const [apps, setApps] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setApps(response.data)
        })
    }, [apps])

    useEffect(() => {
        if (!("Notification" in window)) {
            console.log("This browser does not support desktop notification")
        } else {
            Notification.requestPermission()
        }
    })

    const showNoti = () => {
        const options = {
            body: "Tokyo send friend request",
            icon: icon_codeally,
            dir: "ltr",
            link: "https://codeally.herokuapp.com/"
        }
        const noti = new Notification('Codeally', options)

        noti.onclick = () => {
            navigate('/games')
        }
    }

    return (
        <Routes>
            <Route path="/" element={<User apps={apps} user={user} logout={logout} showNoti={showNoti} />}/>
            <Route path="/games" element={<h1>lol</h1>}/>
            <Route path="*" element={<Error navigate={navigate}/>}/>
        </Routes>
    )
}

export default Codeally

function User (props) {

    const { apps, user, logout, showNoti } = props

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh' }}>
            <Apps apps={apps}/>
            <h1>{user.displayName}</h1>
            <button onClick={() => logout()}>logout</button>
            <button onClick={() => showNoti()}>Notification</button>
        </div>
    )
}