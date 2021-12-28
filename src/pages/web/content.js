import React, { useEffect, useState } from 'react'
// components
import Button from '../../components/button'
import { Colors } from '../../components/styles'
import Item from '../../components/item'
// images
import download from '../../assets/download_white_24dp.svg'
import illustration from '../../assets/app_codeally.svg'
import place from '../../assets/best_place.svg'
import servers from '../../assets/connected.svg'
import assistant from '../../assets/assistant.svg'
// files download
import androidFile from '../../assets/android.txt'
import iosFile from '../../assets/iphone.txt'
import windowsFile from '../../assets/installers/codeally.exe'
// parallax
import { Parallax } from 'react-parallax'
// aos
import Aos from 'aos'
import 'aos/dist/aos.css'

import uwu from '../../assets/uwu.jpg'

function Content() {

    const [platform, setPlatform] = useState('')
    const [fileDownload, setFileDownload] = useState(windowsFile)

    // eslint-disable-next-line
    useEffect(() => {
        if(navigator.userAgent.match(/Android/i)){
            setPlatform('Android')
            setFileDownload(androidFile)
        } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
            setPlatform('Iphone')
            setFileDownload(iosFile)
        } else {
            setPlatform('Windows')
            setFileDownload(windowsFile)
        }
    })

    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <Parallax
            strength={500}
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
                <Item
                    data="fade-up"
                    iconRight={place}
                    title="A PLACE..."
                    text="... where you can do whatever you want, 
                    like chat, watch videos, listen to music, 
                    play games or even much more."
                    colorText={Colors.primary}
                    background={Colors.light}
                />

                <Item
                    data="fade-up"
                    iconLeft={servers}
                    title="SERVERS"
                    text="You can create a server where you can invite 
                    all your friends and create different channels 
                    and be able to assign a codeally application to this channel."
                    colorText={Colors.primary}
                    background={Colors.semiWhite}
                />

                <Item
                    data="fade-up"
                    iconRight={assistant}
                    title="ASSISTANT"
                    text="In codeally we have hanna, 
                    an assistant with whom you can talk, 
                    play or lose anything if you need it."
                    colorText={Colors.primary}
                    background={Colors.light}
                />
            </div>
        </Parallax>
    )
}

export default Content