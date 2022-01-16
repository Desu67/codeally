import React, { useState, useEffect } from 'react'
import { Form, Icon, Input, Button } from 'semantic-ui-react'
// toastify
import { toast } from 'react-toastify'
// firebase
import { validateEmail } from '../../../../utils/validations'
import firebase from '../../../../utils/firebase'
import 'firebase/auth'
// colors
import { Colors } from '../../../../components/styles'
// router
import { useNavigate } from 'react-router-dom'
// framer motion
import { motion } from 'framer-motion'

function Login (props) {

    const { setSelectedForm } = props
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(initialValueForm())
    const [formError, setFormError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [userActive, setUserActive] = useState(true)
    const [user, setUser] = useState(null)
    const [formColor, setFormColor] = useState(null)
    const [mobile, setMobile] = useState(false)
    const [widthMobile, setWidthMobile] = useState('50%')
    const [widthInputMobile, setWidthInputMobile] = useState('90%')

    const navigate = useNavigate()

    const handlerShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(navigator.userAgent.match(/Android/i)){
            setFormColor(null)
            setMobile(false)
            setWidthMobile('100%')
            setWidthInputMobile('100%')
        } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
            setFormColor(null)
            setMobile(false)
            setWidthMobile('100%')
            setWidthInputMobile('100%')
        } else {
            setFormColor(Colors.dark)
            setMobile(true)
            setWidthMobile('50%')
            setWidthInputMobile('100%')
        }
    }, [formColor, widthMobile, widthInputMobile])

    const onSubmit = () => {
        setFormError({})
        let errors = {}
        let formOk = true

        if(!validateEmail(formData.email)){
            errors.email = true
            formOk = false
        }
        if(formData.password.length < 6){
            errors.password = true
            formOk = false
        }
        setFormError(errors)

        if(formOk) {
            setIsLoading(true)
            firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then(response => {
                setUser(response.user)
                setUserActive(response.user.emailVerified)
                if(!response.user.emailVerified){
                    toast.warning("Para poder hacer login antes tienes que verificar la cuenta.")
                }
                navigate('/')
            })
            .catch(err => {
                handlerErrors(err.code)
            })
            .finally(() => {
                setIsLoading(false)
            })
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="auth"
            style={{ overflow: 'hidden' }}
        >
            <Form
                className="form"
                style={{ background: formColor }}
                onSubmit={onSubmit}
                onChange={onChange}
            >
                {mobile ? (
                    <>
                        <div
                            className='circleone'
                            style={{ 
                                backgroundImage: `url(${'https://images.hdqwalls.com/download/auroral-forest-4k-illustration-h0-1920x1080.jpg'})` 
                            }}
                        />

                        <div
                            className='circletwo'
                            style={{ 
                                backgroundImage: `url(${'https://images.hdqwalls.com/download/auroral-forest-4k-illustration-h0-1920x1080.jpg'})` 
                            }}
                        />
                    </>
                ) : (
                    null
                )}

                <div className="auth_zone" style={{ width: widthMobile }}>
                    <h1>Sign in</h1>
                    
                    <Input
                        style={{ width: widthInputMobile  }}
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        error={formError.email}
                    />
                    {formError.email && (
                        <span className="error">
                            Please enter a valid email.
                        </span>
                    )}

                    <Input
                        style={{ width: widthInputMobile  }}
                        type="password"
                        name="password"
                        placeholder="Password"
                        error={formError.password}
                        icon={
                            showPassword ? (
                                <Icon name="eye slash outline" link onClick={handlerShowPassword}/>
                            ) : (
                                <Icon name="eye" onClick={handlerShowPassword}/>
                            )
                        }
                    />
                    {formError.password && (
                        <span className="error">
                            Please choose a password longer than 5 characters.
                        </span>
                    )}

                    <Button type="submit" loading={isLoading}>
                        Login
                    </Button>

                    <div className="auth_options">
                        <p>
                            Need an account?
                            <span onClick={() => setSelectedForm('register')}>Register</span>
                        </p>
                    </div>

                </div>
            </Form>

            {!userActive && (
                <ButtonResetSendEmailVerification
                    user={user}
                    setIsLoading={setIsLoading}
                    setUserActive={setUserActive}
                />
            )}
        </motion.div>
    )
}

export default Login

function ButtonResetSendEmailVerification(props) {
  const { user, setIsLoading, setUserActive } = props

  const resendVerificationEmail = () => {
    user
      .sendEmailVerification()
      .then(() => {
        toast.success("The verification email has been sent")
      })
      .catch(err => {
        handlerErrors(err.code)
      })
      .finally(() => {
        setIsLoading(false)
        setUserActive(true)
      })
    }

  return (
    <div className="resend-verification-email">
      <p>
        If you have not received the verification email you can send it again
        by clicking <span onClick={resendVerificationEmail}>here.</span>
      </p>
    </div>
  )
}

function handlerErrors(code) {
  switch (code) {
    case "auth/wrong-password":
      toast.warning("The username or password is incorrect.")
      break
    case "auth/too-many-requests":
      toast.warning("You've sent too many confirmation email forwarding requests in a very short time.")
      break
    case "auth/user-not-found":
      toast.warning("The username or password is incorrect.")
      break
    default:
      break
  }
}

function initialValueForm () {
    return {
        email: "",
        password: ""
    }
}