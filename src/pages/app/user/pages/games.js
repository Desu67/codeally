import React, { useEffect, useState } from 'react'
// components
import GameItem from '../components/gameitem'
// json
import JSONGAMES from '../components/games.json'

function Games(props) {

    const { user, startVoice, setStartVoice } = props
    // search
    const [search, setSearch] = useState('')
    // modal game
    const [open, setOpen]  = useState(false)

    return (
        <div className='games'>
            <input 
            placeholder='Search' 
            value={search}
            onChange={event => {setSearch(event.target.value)}}
            />

            <div className='games_content'>
                {JSONGAMES.filter((val) => {
                    if(search === ""){
                        return val
                    } else if(val.title.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                }).map((val, key) => {
                    return <GameItem
                        key={key}
                        img={val.img}
                        title={val.title}
                        url={val.url}
                        onClick={() => setOpen(true)}
                        open={open}
                        setOpen={setOpen}
                    />
                })}
            </div>
        </div>
    )
}

export default Games