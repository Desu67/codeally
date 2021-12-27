import React, { useState } from 'react'
// toastify
import { ToastContainer } from 'react-toastify'
// firebase
import firebase from './utils/firebase'
import 'firebase/auth'
// pages web
import Web from './pages/web/index'
// pages app
import Codeally from './pages/app/index'
// routes
import { BrowserRouter as Router } from 'react-router-dom'
// css
import './App.css'

function App() {

  // eslint-disable-next-line
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  // eslint-disable-next-line
  const [reloadApp, setReloapApp] = useState(false)

  firebase.auth().onAuthStateChanged(currentUser => {
    if(!currentUser?.emailVerified) {
      firebase.auth().signOut()
      setUser(null)
    } else {
      setUser(currentUser)
    }
    setIsLoading(false)
  })

  if(isLoading) {
    return null
  }

  return (
    <Router>
      <div className="app">
        {user ? (
          <Codeally user={user} setReloapApp={setReloapApp}/>
        ) : (
          <Web user={user}/>
        )}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          puaseOnVisibilityChange
          draggable
          pauseOnHover={false}
        />
      </div>
    </Router>
  )
}

export default App