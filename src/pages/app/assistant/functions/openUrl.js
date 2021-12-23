import React from 'react'

export default function OpenUrl(props) {
    const { url } = props

    const openurl = (url) => {
        window.open(
            url,
            '_blank'
        )
    }

    return (
        <div>
            {url}
        </div>
    )
}