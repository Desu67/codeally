import React, { useEffect, useState } from 'react'
// components
import Button from '../../components/button'
import { Colors } from '../../components/styles'
// images
import download from '../../assets/download_white_24dp.svg'
import illustration from '../../assets/app_codeally.svg'
// files download
import androidFile from '../../assets/android.txt'
import iosFile from '../../assets/iphone.txt'
import windowsFile from '../../assets/installers/codeally.exe'
// parallax
import { Parallax } from 'react-parallax'

function Content() {

    const [platform, setPlatform] = useState('')
    const [fileDownload, setFileDownload] = useState(windowsFile)
    const [fontSize, setFontSize] = useState('18px')

    // eslint-disable-next-line
    useEffect(() => {
        if(navigator.userAgent.match(/Android/i)){
            setPlatform('Android')
            setFileDownload(androidFile)
            setFontSize('18px')
        } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
            setPlatform('Iphone')
            setFileDownload(iosFile)
            setFontSize('18px')
        } else {
            setPlatform('Windows')
            setFileDownload(windowsFile)
            setFontSize('20px')
        }
    })

    return (
        <Parallax
            strength={400}
        >
            <div className="content">
                    <div className="download_section">
                        <h1>
                            ENTER THE CODEALLY WORLD
                        </h1>
                        <p>
                            What are you waiting for? Hang out with your friends or just enjoy all the benefits codeally by yourself on our desktop version,
                            <br/>
                            web or even mobile app.
                        </p>
                        <Button
                            icon={download}
                            color={Colors.primary}
                            colorText={Colors.light}
                            text={`Download for ${platform}`}
                            weight="300"
                            width="250px"
                            height="60px"
                            fileDownload={fileDownload}
                            borderRadius="999px"
                        />
                    </div>
                <div className="preview">
                    <img src={illustration} alt="preview_codeally"/>
                </div>
            </div>

            <div className='section'>
                <div className='content' style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                    <div id='devices'>
                        <h1 style={{ color: Colors.primary }}>
                            A place...
                        </h1>
                        <p style={{ color: Colors.primary, fontSize: fontSize }}>
                            ... where you can do whatever you want,
                            like chat, watch videos, listen to music,
                            play games or even much more.
                        </p>
                    </div>

                    <div id='devices'>
                        <h1 style={{ color: Colors.primary }}>
                            Servers
                        </h1>
                        <p style={{ color: Colors.primary, fontSize: fontSize }}>
                            You can create a server where you can invite 
                            all your friends and create different channels 
                            and be able to assign a codeally application to this channel.
                        </p>
                    </div>

                    <div id='devices'>
                        <h1 style={{ color: Colors.primary }}>
                            Assistant
                        </h1>
                        <p style={{ color: Colors.primary, fontSize: fontSize }}>
                            At codeally we have hanna, 
                            an assistant you can talk to or lose anything 
                            to him if you need to.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default Content