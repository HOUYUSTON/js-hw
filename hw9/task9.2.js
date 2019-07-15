После запуска кода результат в консоли должен быть таким:

Иван
Дмитрий
Степан
Михаил
а после выполнения кода:

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()
результат в консоли должен быть таким:

Иван
Степан
Михаил

var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                users.filter(user => user.name === userName).reduce((result, user) => {
                    if(present === "+" || present === "присутствовал" || present === true) {
                        user.present = true
                    }
                }, user
            )},
            showPresent () {
                users.filter(user => user.present === true).forEach (user => console.log(user.name))
            },
            showAbsent () {
                users.filter(user => user.present === false).forEach (user => console.log(user.name))
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()