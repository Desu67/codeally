const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.lang = 'es-ES'
recognition.continuos = true
recognition.interimResults = false

export { recognition }