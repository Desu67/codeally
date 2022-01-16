import React, { useEffect } from 'react'
// firebase
import firebase from '../../../../utils/firebase'
import { useNavigate } from 'react-router-dom'
// images
import icon_codeally from '../../../../assets/icon.png'
// components
import Avatar from '../components/avatar'

function Settings(props) {

    const { user, setReloadApp } = props
 
    const navigate = useNavigate()

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

    const logout = () => {
        navigate('/auth')
        firebase.auth().signOut()
        setTimeout(() => {
            navigate('/auth')
        }, 100)
    }

    return (
        <div>
            <h1 style={{ color: '#ffffff' }}>Settings</h1>
            <Avatar user={user} setReloadApp={setReloadApp}/>
            <button onClick={() => logout()}>Logout</button>
            <button onClick={() => showNoti()}>Noti</button>
        </div>
    )
}

export default Settings