import React, { useState } from 'react'
// pages
import Navigation from './navigation'
import Content from './content'
import Footer from './footer'
// pages navigation
import Safety from './pages/safety'
import Technical from './pages/technical'
import { Login, Register } from './pages/auth/index'
import Error from './pages/error'
// routes
import { Routes, Route, useNavigate } from 'react-router-dom'

function Web(props) {

    const { user } = props
    const [selectedForm, setSelectedForm] = useState(null)

    const HandleForm = () => {
        switch (selectedForm) {
            case "login":
                return <Login setSelectedForm={setSelectedForm} />;
            case "register":
                return <Register setSelectedForm={setSelectedForm} />;
            default:
                return <Login setSelectedForm={setSelectedForm} />;
        }
    }

    const navigate = useNavigate()

    return (
        <Routes>
            <Route path="/" element={<WebIndex />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/support" element={<Technical />} />
            <Route path="/auth" element={<HandleForm user={user} />} />
            <Route path="*" element={<Error navigate={navigate} />} />
        </Routes>
    )
}

export default Web

function WebIndex() {
    return (
        <>
            <Navigation />
            <Content />
            <Footer />
        </>
    )
}