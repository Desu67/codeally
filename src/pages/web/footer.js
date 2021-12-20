import React from 'react'
import { Colors } from '../../components/styles'
// images
import discord from '../../assets/discord-v2-svgrepo-com.svg'
import youtube from '../../assets/youtube-svgrepo-com.svg'
import twitter from '../../assets/twitter-svgrepo-com.svg'

function Footer() {
    return (
        <div className="footer" style={{ background: Colors.primary }}>
            <img src={twitter} alt="twitter"/>
            <img src={discord} alt="discord"/>
            <img src={youtube} alt="instagram"/>
        </div>
    )
}

export default Footer