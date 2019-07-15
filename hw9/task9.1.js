Завершите код функции typeMessage так, чтобы на страницу выводился один символ в секунду

function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    message.split('').forEach (
        character => setTimeout (
            function () {
                container.textContent += character
            },
            1000 * velocity++)
    )
}

typeMessage ( `Welcome to the hell`, 1 )