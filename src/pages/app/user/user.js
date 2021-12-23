import React, { useEffect, useState } from 'react'
// components
import Avatar from './avatar'
// firebase
import firebase from '../../../utils/firebase'
import { useNavigate } from 'react-router-dom'
// images
import icon_codeally from '../../../assets/icon.png'

function User (props) {

    const { user, setReloapApp } = props

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
        firebase.auth().signOut()
        setTimeout(() => {
            navigate('/auth')
        }, 100)
    }

    return(
        <div>
            <Avatar user={user} setReloadApp={setReloapApp}/>
        </div>
    )
}

export default User