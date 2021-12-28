import React, { useEffect, useState } from 'react'
import { Colors } from '../../components/styles'
// images
import discord from '../../assets/discord-v2-svgrepo-com.svg'
import youtube from '../../assets/youtube-svgrepo-com.svg'
import twitter from '../../assets/twitter-svgrepo-com.svg'

function Footer() {

    const [fontSize, setFontSize] = useState('19px')
    const year = new Date()

    // eslint-disable-next-line
    useEffect(() => {
        if(navigator.userAgent.match(/Android/i)){
            setFontSize('15px')
        } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
            setFontSize('15px')
        } else {
            setFontSize('19px')
        }
    })

    const openurl = (url) => {
        window.open(
            url,
            '_blank'
        )
    }

    return (
        <div className="footer" style={{ background: Colors.primary }}>
            <div className='row'>
                <img 
                    onClick={() => 
                        openurl('https://twitter.com/CodeallyTeam')} 
                    src={twitter}
                    alt="twitter"
                />

                <img 
                    onClick={() => 
                        openurl('https://discord.gg/2tMks4TYwC')} 
                    src={discord} 
                    alt="discord"
                />

                <img 
                    onClick={() => 
                        openurl('https://www.youtube.com/channel/UCG18gvH-bIDDMP73_6mGmvA')} 
                    src={youtube} 
                    alt="instagram"
                />
            </div>
            <h1 style={{ fontSize: fontSize }}>Copyright © {year.getFullYear()} Codeally. All Rights Reserved.</h1>
        </div>
    )
}

export default Footer