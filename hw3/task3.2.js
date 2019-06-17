userInfo = function () {
    return this.registered ? "Дата регистрации: " + this.data : "Незарегистрированный пользователь: " + this.name
}

User = function (name, registered, data) {
    this.name = name
    this.registered = registered
    this.data = data
    this.getInfo = userInfo
}


var user1 = new User ("boi", true, "27.07.2007")
var user2 = new User ("girl", true, "18.08.2008")
var user3 = new User ("bot", false)

console.log(user1.getInfo())
console.log(user2.getInfo())
console.log(user3.getInfo())