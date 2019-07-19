var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => new Date().toLocaleString().split(", ")[1]

var log = {}

var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
)

var sendAll = () => {
    var index = 0
    function recursive () {
        sendMessage(messages[index]).then (//pochemu raznitsa mejdu vizovami men'she 7 sec
            resolve => {
                log[messages.getKey()] = resolve
                return index < messages.length ?
                    recursive() :
                    null
            }
        )
        index++
    }
    recursive ()
}

sendAll()