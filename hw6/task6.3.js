var style = document.createElement ("style")
style.innerText = `.redBack {
    background-color: red!important;
}`
document.head.appendChild (style)

for (var tag of document.body.children) {
    tag.tagName === "SCRIPT" ? 
        null :
            tag.classList.add("redBack")
}