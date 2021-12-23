import React from 'react'
// recognition
import { recognition } from './recognition'
import { useSpeechSynthesis } from './useSpeech'
import { Howl } from 'howler'
// commands
import { showHours, showTime } from './time/time'
// firebase
import firebase from '../../../utils/firebase'
import { useNavigate } from 'react-router-dom'

function Hanna(props) {

    const { setCurrentTab } = props
    const navigate = useNavigate()

    const { speak } = useSpeechSynthesis()

    const soundPlay = (src) => {
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play()
    }

    const logout = () => {
        firebase.auth().signOut()
        setTimeout(() => {
            navigate('/auth')
        }, 100)
    }

    ///=> speech recognition
    recognition.onstart = () => {
        console.log('Voice recognition has started.')
    }

    recognition.onstop = () => {
        console.log('Voice recognition has stoped.')
    }

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript

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

    return null
}

export default Hanna