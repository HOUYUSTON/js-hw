var tags = ["section", "p", "ul", "li", "footer"]
var classes = ["sec", "text", "list", "item", "footer"]

var style = document.createElement ("style")
document.head.appendChild (style)

for (var klass of classes) {
    style.innerText += `.${klass} { color : gray; }`
}

for (var item of tags) {
    var tmp = document.createElement(item)
    tmp.classList.add(classes[tags.indexOf(item)])
    document.body.appendChild (tmp)
}