const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
// response random
const min = 0
const max = 3
const responserandom = Math.floor((Math.random() * (max - min + 1)) + min)

recognition.start()

recognition.onend = () => {
    recognition.start()
}

export { recognition, responserandom }