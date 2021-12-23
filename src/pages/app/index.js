import React from 'react'
// pages
import Content from './content'
import Error from '../web/pages/error'
// routes
import { Routes, Route, useNavigate } from 'react-router-dom'

function Codeally(props) {

    const { user, setReloapApp } = props
    const navigate = useNavigate()

    return (
        <Routes>
            <Route path="/" element={<Content user={user} setReloapApp={setReloapApp} />}/>
            <Route path="*" element={<Error navigate={navigate}/>}/>
        </Routes>
    )
}

export default Codeally