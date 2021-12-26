import React, { useEffect } from 'react'
// recognition
import { recognition } from './recognition'
import { useSpeechSynthesis } from './useSpeech'
// commands
import { showTime } from './time/time'
import { showDate } from './time/date'
// firebase
import firebase from '../../../utils/firebase'
import { useNavigate } from 'react-router-dom'

function Hanna(props) {

    const { user, setCurrentTab, startVoice, setStartVoice } = props
    const navigate = useNavigate()

    const { speak } = useSpeechSynthesis()

    const logout = () => {
        firebase.auth().signOut()
        setTimeout(() => {
            navigate('/auth')
        }, 100)
    }

    useEffect(() => {
        if(startVoice === true){
            recognition.start()
        } else {
            recognition.stop()
        }
    }, [startVoice])

    ///=> speech recognition
    recognition.onstart = () => {
        console.log('Voice recognition has started.')
    }

    recognition.onstop = () => {
        console.log('Voice recognition has stoped.')
    }

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript

        console.log(command)

        setStartVoice(false)

        if(command === 'Hola.'){
            speak({ text: `Hola, ${user.displayName}` })
        }

        if(command === '¿Qué hora es?') {
            speak({ text: `Son las ${showTime}` })
        }

        if(command === '¿Qué día es hoy?'){
            speak({ text: `Hoy estamos a ${showDate}` })
        }

        if(command === 'Home.' | command === 'Go to home.'){
            setCurrentTab('Home')
        }
    
        if(command === 'Movies.' | command === 'Go to movies.'){
            setCurrentTab('Movies')
        }
    
        if(command === 'Music.' | command === 'Go to music.'){
            setCurrentTab('Music')
        }
    
        if(command === 'Games.' | command === 'Go to games.'){
            setCurrentTab('Games')
        }
    
        if(command === 'Books.' | command === 'Go to books.'){
            setCurrentTab('Books')
        }
    
        if(command === 'Settings.' | command === 'Go to settings.'){
            setCurrentTab('Settings')
        }

        if(command === 'Log out.'){
            logout()
        }
    }

    return (
        <></>
    )
}

export default Hanna