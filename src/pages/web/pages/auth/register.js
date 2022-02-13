import React, { useEffect, useState } from 'react'
// semantic ui
import { Button, Icon, Form, Input } from 'semantic-ui-react'
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

import url from '../../../../assets/designs/auth.jpg'

function Register(props) {

    const { setSelectedForm } = props
    const [formData, setFormData] = useState(initialValueForm())
    const [showPassword, setShowPassword] = useState(false)
    const [formError, setFormError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [formColor, setFormColor] = useState(null)
    const [mobile, setMobile] = useState(false)
    const [widthMobile, setWidthMobile] = useState('50%')
    const [widthInputMobile, setWidthInputMobile] = useState('90%')

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
        if (navigator.userAgent.match(/Android/i)) {
            setFormColor(null)
            setMobile(false)
            setWidthMobile('100%')
            setWidthInputMobile('100%')
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
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
                                backgroundImage: `url(${url})`
                            }}
                        />

                        <div
                            className='circletwo'
                            style={{
                                backgroundImage: `url(${url})`
                            }}
                        />
                    </>
                ) : (
                    null
                )}

                <div className="auth_zone" style={{ width: widthMobile }}>

                    <h1>Register</h1>

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

                    <div className="auth_options">
                        <p>
                            Already have an account?
                            <span onClick={() => setSelectedForm('login')}>Login</span>
                        </p>
                    </div>

                </div>
            </Form>
        </motion.div>
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