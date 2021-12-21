import React, { useEffect, useState } from 'react'
import Apps from './apps'
// axios
import Axios from 'axios'
// firebase
import firebase from '../../utils/firebase'
// navigate
import { useNavigate } from 'react-router'

function Codeally(props) {

    const { user } = props

    const navigate = useNavigate()

    const logout = () => {
        firebase.auth().signOut()
        navigate('/auth')
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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh' }}>
            <Apps apps={apps}/>
            <h1>{user.displayName}</h1>
            <button onClick={() => logout()}>logout</button>
            <button onClick={() => new Notification('Hey')}>Notification</button>
        </div>
    )
}

export default Codeally