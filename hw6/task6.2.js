var tags = []

var sec = document.createElement("section")
sec.setAttribute("id", "sec")
sec.setAttribute("title", "This is a section")
tags.push(sec)

var p = document.createElement("p")
p.setAttribute("id", "text")
p.setAttribute("title", "This is a text")
tags.push(p)

var h2 = document.createElement("h2")
h2.setAttribute("id", "headline")
h2.setAttribute("title", "This is a Headline")
tags.push(h2)

var style = document.createElement ("style")
document.head.appendChild (style)

for (var tag of tags) {
    style.innerText += `#${tag.id} { color : gray; }`
}

for (var tag of tags) {
    document.body.appendChild(tag)
}