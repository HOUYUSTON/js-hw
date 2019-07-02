при удалении элемента его потомки должны оставаться

var collection = ["div", "section", "span", "p"]

function over ( event ) {
    event.target.style.backgroundColor = `#ffff0050`
    event.target.title = `${event.target.name}`
}
function out ( event ) {
    event.target.style.backgroundColor = `#ff00ff50`
}
function clickHandler ( event ) {
    event.target.hasChildNodes() ?
        adoption (event.target) :
            null
    event.target.remove()
}

adoption = function (node) {
    var elem = node.parentNode
    for (child of node.childNodes) {
        elem.appendChild(child)
        elem = child
    }
}

var elem = document.body
var width = 20
var height = 20

for (tag of collection) {
    var name = tag
    tag = elem.appendChild(document.createElement(tag))
    tag.name = name
    tag.style = `
        display : block;
        width : ${width}vw;
        height : ${height}vh;
        background-color : #ff00ff50;
        border : dotted 1px yellow;
        margin : auto;`
    tag.onmouseover = over
    tag.onmouseout = out
    tag.onclick = clickHandler
    elem = tag
    width -= 5
    height -= 5
}