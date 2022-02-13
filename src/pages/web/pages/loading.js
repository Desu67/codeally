import React from 'react'
// colors
import { Colors } from '../../../components/styles'
// image
import codeally from '../../../assets/designs/loading.svg'

function Loading() {

    return (
        <div className='loading_chat' style={{ background: Colors.dark }}>
            <img src={codeally} alt='codeally' />
        </div>
    )
}

export default Loading