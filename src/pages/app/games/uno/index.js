import React from "react"
// routes
import { Routes ,Route } from 'react-router-dom'
// pages
import Homepage from './components/home'
import Uno from './components/uno'

function UnoGame() {
    return(
        <div>
            <Routes>
                <Route path='/' element={Homepage}/>
                <Route path='/play' element={Uno}/>
            </Routes>
        </div>
    )
}

export default UnoGame