Self = function (a, b, c) {
    console.dir(this)
    console.log(a, b, c)
}

var s = Self(10, false, "google")