import React from 'react'
// play
import play from '../../../../assets/icons/play.svg'


function GameItem(props) {

    const { title, img, onClick, open, setOpen, url } = props

    return (
        <div className='game_item' style={{ background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            {open ? (
                <div className='modal_game'>
                    <div onClick={() => setOpen(false)} className='settings_game'>Close</div>
                    <iframe frameBorder="0px" src={url}/>
                </div>
            )
            :
            (
                <>
                    <h1>{title}</h1>
                    <div className='button' onClick={onClick}>
                        <img src={play} alt='button'/>
                    </div>
                </>
            )}
        </div>
    )
}

export default GameItem