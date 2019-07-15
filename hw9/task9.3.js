let changeClass = ( classname, styleString ) => (
    Array.prototype.forEach.call(document.getElementsByTagName("STYLE"), child => 
        child.textContent = child.classname === classname? styleString : child.textContent)
    //Array.prototype.forEach.call(document.getElementsByClassName(classname), child => child.style = styleString)
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}` //Ne rabotayet, posmotrel cherez console i ponyal chto vsyo chto ya mogu sdelat' eto dostat' innerHTML i kakto v nem koviryatsa