��������� ��� ����������� ������� typeMessage ���, ����� ��� �� ������ �� �������� ��������� ���� ������ � �������

var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0
    return function ( message ) {
        ...
    }
})( 1 )

typeMessage ( `Welcome to the hell` )

~~~~~~~

var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0
    return function ( message ) {
        if (index < message.length) {
            setTimeout (
            function () {
                container.textContent += message [index++]
                typeMessage (message)
            },
            1000)
        }
    }
})( 1 )

typeMessage ( `Welcome to the hell` )