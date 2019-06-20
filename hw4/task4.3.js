function Dummy () {}
Dummy.prototype.addProperty = function (prop, value) {
    this [prop] = value
}

d = new Dummy()
d.addProperty("Opened", true)