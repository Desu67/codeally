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
        if(navigator.userAgent.match(/Android/i)){
            firebase.auth().signOut()
            navigate('/auth')
        } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
            firebase.auth().signOut()
            navigate('/auth')
        } else {
            firebase.auth().signOut()
            navigate('/')
        }
    }

    const [apps, setApps] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setApps(response.data)
        })
    }, [apps])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh' }}>
            <Apps apps={apps}/>
            <h1>{user.displayName}</h1>
            <button onClick={() => logout()}>logout</button>
        </div>
    )
}

export default Codeally