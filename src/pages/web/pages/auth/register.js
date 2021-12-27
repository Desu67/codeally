import React, { useEffect, useState } from 'react'
// semantic ui
import { Button, Icon, Form, Input } from 'semantic-ui-react'
// image
import brand_codeally from '../../../../assets/logo.svg'
import waves from '../../../../assets/explore.svg'
// firebase
import firebase from '../../../../utils/firebase'
import 'firebase/auth'
import { validateEmail } from '../../../../utils/validations'
// colors
import { Colors } from '../../../../components/styles'
// toastify
import { toast } from 'react-toastify'
// framer motion
import { motion } from 'framer-motion'
import Wave from 'react-wavify'

function Register (props) {

    const { setSelectedForm } = props
    const [formData, setFormData] = useState(initialValueForm())
    const [showPassword, setShowPassword] = useState(false)
    const [formError, setFormError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [formColor, setFormColor] = useState(null)
    const [mobile, setMobile] = useState(false)
    const [widthMobile, setWidthMobile] = useState('50%')
    const [widthInputMobile, setWidthInputMobile] = useState('90%')
    const [imageBackground, setImageBackground] = useState(null)

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
            setImageBackground(null)
        } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
            setFormColor(null)
            setMobile(false)
            setWidthMobile('100%')
            setWidthInputMobile('100%')
            setImageBackground(null)
        } else {
            setFormColor(Colors.dark)
            setMobile(true)
            setWidthMobile('50%')
            setWidthInputMobile('100%')
            setImageBackground(waves)
        }
    }, [formColor, widthMobile, widthInputMobile, imageBackground])

    const onSubmit = () => {
        setFormError({})
        let errors = {}
        let formOk = true

        if (!validateEmail(formData.email)) {
        errors.email = true
        formOk = false
        }
        if (formData.password.length < 6) {
        errors.password = true
        formOk = false
        }
        if (!formData.username) {
        errors.username = true
        formOk = false
        }
        setFormError(errors)

        if (formOk) {
        setIsLoading(true)
        firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(() => {
            changeUserName()
            sendVerificationEmail()
            })
            .catch(() => {
            toast.error("Error al crear la cuenta.")
            })
            .finally(() => {
            setIsLoading(false)
            setSelectedForm(null)
            })
        }
    }

    const changeUserName = () => {
        firebase
        .auth()
        .currentUser.updateProfile({
            displayName: formData.username
        })
        .catch(() => {
            toast.error("Error al asignar el nombre de usuario.")
        })
    }

    const sendVerificationEmail = () => {
        firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
            toast.success('Se ha enviado un email de verificacion.')
        })
        .catch(() => {
            toast.error('Error al enviar el email de verificacion.')
        })
    }

    return (
        <div
            className="auth" 
            style={{ background: `url(${imageBackground})`, overflow: 'hidden' }}
        >
            <Form
                className="form" 
                style={{ background: formColor, border: mobile ? '#2e343b 1px solid' : 'none' }} 
                onSubmit={onSubmit}
                onChange={onChange}
            >

                {mobile ? (
                    <motion.div initial={{ x: '-100vh' }} animate={{ x: '0' }} className="spam_zone">
                        <h1>
                            Create <br/>
                            account
                        </h1>
                        <p>
                            Already have an account? <br/>
                            You know what you have to do then... <br/>
                            !Let's click here below!
                        </p>

                        <p>
                            <span onClick={() => setSelectedForm('login')}>Login</span>
                        </p>
                    </motion.div>
                ) : (
                    null
                )}

                <motion.div initial={{ x: '100vh' }} animate={{ x: '0' }} className="auth_zone" style={{ width: widthMobile }}>

                    <img src={brand_codeally} alt="brand_codeally"/>
                    <Input
                        className="auth_inputs"
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        icon="mail outline"
                        error={formError.email}
                    />
                    {formError.email && (
                        <span className="error">
                            Please enter a valid email.
                        </span>
                    )}

                    <Input
                        className="auth_inputs"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        error={formError.password}
                        icon={
                        showPassword ? (
                            <Icon
                            name="eye slash outline"
                            link
                            onClick={handlerShowPassword}
                            />
                        ) : (
                            <Icon name="eye" link onClick={handlerShowPassword} />
                        )
                        }
                    />
                    {formError.password && (
                        <span className="error">
                            Please choose a password longer than 5 characters.
                        </span>
                    )}

                    <Input
                        className="auth_inputs"
                        type="text"
                        name="username"
                        placeholder="Username"
                        icon="user circle outline"
                        error={formError.username}
                    />
                    {formError.username && (
                        <span className="error">
                            Please enter a name.
                        </span>
                    )}

                    <Button type="submit" loading={isLoading}>
                        Register
                    </Button>

                </motion.div>
            </Form>

            {mobile ? (
                <div id='wave'>
                    <Wave
                        fill={Colors.primary}
                        paused={false}
                        options={{
                            speed: 0.3,
                            points: 2
                        }}
                    />
                </div>
            ) : (
                <div className="auth_options">
                    <p>
                        Already have an account?
                        <span onClick={() => setSelectedForm('login')}>Login</span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Register

function initialValueForm() {
    return {
        email: "",
        password: "",
        username: ""
    }
}