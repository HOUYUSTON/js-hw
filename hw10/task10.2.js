function User ( name ) {
    this.name = name
    var presence = false
    Object.defineProperty(this, "presence", {
        get: () => {
            console.log(presence ? this.name + " is present" : this.name + " is absent")
        },
        set: function(arg) {
            arg.length > 0 ?
                presence = Boolean(arg) :
                null
        }
    })
}

let user = new User ( "Ivan" )
console.info ( user.presence )