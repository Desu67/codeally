import React, { useEffect, useState } from 'react'

function Item(props) {

    const { iconRight, iconLeft, title, text, colorText, background, data } = props
    const [isMobile, setIsMobile] = useState(false)

    // eslint-disable-next-line
    useEffect(() => {
        if(navigator.userAgent.match(/Android/i)){
            setIsMobile(true)
        } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    })

    return (
        <div data-aos={data} style={{ background: background }} className='item'>
            {!isMobile ? iconRight && (
                <img src={iconRight} alt="icon"/>
            ) : (
                null
            )}
            
            <div className='item_content'>
                <h1 style={{ color: colorText }}>{title}</h1>
                <p style={{ color: colorText }}>{text}</p>
            </div>
            
            {!isMobile ? iconLeft && (
                <img src={iconLeft} alt="icon"/>
            ) : (
                null
            )}
        </div>
    )
}

export default Item