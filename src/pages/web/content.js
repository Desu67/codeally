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

    return (
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
    )
}

export default Content