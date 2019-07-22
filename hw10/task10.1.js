let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

var log = {}

getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? key + "[2]" : key
}

var handler = function(data) {
    Object.defineProperty(log, getKey(), {
        value: data
    })
}

var sendMessage = ( message, callback ) =>
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )

messages.forEach (
    message => sendMessage ( message, handler )
)