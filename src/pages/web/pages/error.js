import React, { useEffect } from 'react'
// colors
import { Colors } from '../../../components/styles'
// image
import codeally from '../../../assets/designs/loading.svg'

function Error (props) {

    const { navigate } = props

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2000)
    })

    return (
        <div className='loading' style={{ background: Colors.dark }}>
            <img src={codeally} alt='codeally'/>
        </div>
    )
}

export default Error