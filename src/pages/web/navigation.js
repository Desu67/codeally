import React, { useEffect, useState } from 'react'
// components
import Button from './../../components/button'
import { Colors } from '../../components/styles'
import brand_codeally from '../../assets/logo.svg'
import iconMenu from '../../assets/menu_white_24dp.svg'
import closeMenu from '../../assets/arrow_back_white_24dp.svg'
// icons menu
import arrow from '../../assets/arrow_right_white.svg'
import { useNavigate } from 'react-router'
// framer motion
import { motion } from 'framer-motion'

function Navigation () {

    const navigate = useNavigate()

    const [icon, setIcon] = useState(iconMenu)
    const [text, setText] = useState('')
    const [background, setBackground] = useState(null)
    const [width, setWidth] = useState('145px')
    const [mobileClick, setMobileClick] = useState(false)
    // menu
    const [showMenu, setShowMenu] = useState(false)
    const [margin, setMargin] = useState('15px')

    const [offsetValue, setOffsetValue] = useState(true)

    const googleSignIn = () => {
        navigate('/auth')
    }

    const animationCloseSet = () => {
        setOffsetValue(false)
        setTimeout(() => {
            setOffsetValue(true)
            setShowMenu(false)
        }, 500)
    }

    useEffect(() => {
        if(navigator.userAgent.match(/Android/i)){
            setIcon(iconMenu)
            setText(null)
            setBackground(null)
            setWidth('24px')
            setMobileClick(true)
            setMargin('5px')
        } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
            setIcon(iconMenu)
            setText(null)
            setBackground(null)
            setWidth('24px')
            setMobileClick(true)
            setMargin('5px')
        } else {
            setIcon(null)
            setText('Open Codeally')
            setBackground(Colors.light)
            setWidth('145px')
            setMobileClick(false)
        }
    }, [])

    return(
        <div className="navigation">
            <img style={{ cursor: 'pointer' }} src={brand_codeally} alt="brand_codeally" onClick={() => navigate('/')}/>
            <Button
                icon={icon}
                color={background}
                colorText={Colors.dark}
                text={text}
                weight="normal"
                width={width}
                height="40px"
                borderRadius="999px"
                onClick={() => mobileClick ? setShowMenu(true) & setOffsetValue(true) : googleSignIn()}
            />
            {mobileClick && showMenu && (
                <motion.div
                    initial={{ width: offsetValue ? '0%' : '50%' }}
                    animate={{ width: offsetValue ? '50%' : '0%' }}
                    className="menu" style={{ background: Colors.primary }}>
                    <Button
                        icon={closeMenu}
                        colorText={Colors.light}
                        text="Back"
                        width="95px"
                        height="45px"
                        onClick={() => animationCloseSet()}
                        margin={margin}
                        borderRadius="999px"
                    />
                    <a 
                        style={{ display: 'flex', flexDirection: 'row', padding: '10px', borderRadius: '10px', minWidth: '100px', height: '25px', justifyContent: 'flex-start', textAlign: 'start', alignItems: 'center' }} 
                        href="/"
                    >
                        Home <img id="icon" src={arrow} alt="icon"/> 
                    </a>

                    <a 
                        style={{ display: 'flex', flexDirection: 'row', padding: '10px', borderRadius: '10px', minWidth: '100px', height: '25px', justifyContent: 'flex-start', textAlign: 'start', alignItems: 'center' }}
                        href="/safety"
                    >
                        Safety <img id="icon" src={arrow} alt="icon"/>
                    </a>

                    <a 
                        style={{ display: 'flex', flexDirection: 'row', padding: '10px', borderRadius: '10px', minWidth: '100px', height: '25px', justifyContent: 'flex-start', textAlign: 'start', alignItems: 'center' }}
                        href="/support"
                    >
                        Support <img id="icon" src={arrow} alt="icon"/>
                    </a>
                </motion.div>
            )}
        </div>
    )
}

export default Navigation