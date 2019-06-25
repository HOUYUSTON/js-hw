function sampleFunc () {
    console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}

function modificator ( func ) {
    func.valueOf = function () {
        return func.arguments.callee.toString().length
    }
}

modificator( sampleFunc )

sampleFunc()