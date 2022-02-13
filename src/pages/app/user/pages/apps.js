import React, { useEffect, useState } from 'react'
import { ChatEngine } from 'react-chat-engine'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Loading from '../../../web/pages/loading'

function Apps(props) {

    const navigate = useNavigate()

    const { user } = props
    const [loading, setLoading] = useState(true)

    /*const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob()
        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
    }*/

    /*useEffect(() => {
        if (!user) {
            return <Error navigate={navigate} />
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-ID": process.env.REACT_APP_CHAT_ENGINE_ID,
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formdata = new FormData()
                formdata.append('email', user.email)
                formdata.append('username', user.email)
                formdata.append('secret', user.uid)
                    .then(() => {
                        axios.post('https://api.chatengine.io/users',
                            formdata,
                            { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY } }
                        )
                            .then(() => setLoading(false))
                            .catch((error) => console.log(error))
                    })

                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name)

                        axios.post('https://api.chatengine.io/users',
                            formdata,
                            { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY } }
                        )
                            .then(() => setLoading(false))
                            .catch((error) => console.log(error))
                    })
            })
    }, [user])*/

    if (!user || loading) return <Loading />

    return (
        <div className='chat'>
            <div className="chats-page">
                <ChatEngine
                    projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
                    userName={user.email}
                    userSecret={user.uid}
                />
            </div>
        </div>
    )
}

export default Apps