import React, { useEffect } from 'react'
// colors
import { Colors } from '../../../components/styles'
import { Howl } from 'howler'
// audio
import signal from '../../../assets/tele.mp3'

function Error (props) {

    const { navigate } = props

    const soundPlay = (src) => {
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play()
    }

    const effect = () => {
        var canvas
        var ctx
        var imgData
        var pix
        var WIDTH
        var HEIGHT
        // eslint-disable-next-line
        var flickerInterval

        const flickering = () => {
            for(var i = 0; i < pix.length; i += 4){
                var color = (Math.random() * 255) + 50
                pix[i] = color
                pix[i + 1] = color
                pix[i + 2] = color
            }
            ctx.putImageData(imgData, 0, 0)
        }

        canvas = document.getElementById('canvas')
        ctx = canvas.getContext('2d')
        canvas.width = WIDTH = 700
        canvas.height = HEIGHT = 500
        ctx.fillStyle = Colors.light
        ctx.fillRect(0, 0, WIDTH, HEIGHT)
        ctx.fill()
        imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT)
        pix = imgData.data
        // eslint-disable-next-line
        flickerInterval = setInterval(flickering, 30)

        soundPlay(signal)

    }

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2000)
        effect()
    })

    return (
        <div className="error">
            <h1>404</h1>
            <canvas id="canvas"/>
        </div>
    )
}

export default Error