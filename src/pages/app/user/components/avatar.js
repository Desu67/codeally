import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import NoAvatar from '../../../../assets/user.svg'
// firebase
import firebase from '../../../../utils/firebase'
import 'firebase/storage'
import 'firebase/auth'

function Avatar(props) {

    const { user, setReloadApp } = props
    const [avatarUrl, setAvatarUrl] = useState(user.photoURL)

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        setAvatarUrl(URL.createObjectURL(file))
        uploadImage(file).then(() => {
            updateUserAvatar()
        })
    })

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
    })

    const uploadImage = file => {
        const ref = firebase
            .storage()
            .ref()
            .child(`avatar/${user.uid}`)
        return ref.put(file)
    }

    const updateUserAvatar = () => {
        firebase
        .storage()
        .ref(`avatar/${user.uid}`)
        .getDownloadURL()
        .then(async response => {
            await firebase.auth().currentUser.updateProfile({ photoURL: response })
            setReloadApp(prevState => !prevState)
        })
        .catch(() => {
            toast.error('Error al actualizar el avatar')
        })
    }

    return (
        <div className='user_avatar' {...getRootProps()}>
            <input {...getInputProps()}/>
            {isDragActive ? (
                <img src={NoAvatar} alt='avatar'/>
            ): (
                <img src={avatarUrl ? avatarUrl : NoAvatar} alt='avatar'/>
            )}
        </div>
    )
}

export default Avatar