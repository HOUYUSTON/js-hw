����� ������� ���� ��������� � ������� ������ ���� �����:

����
�������
������
������
� ����� ���������� ����:

users.setUserPresent( "����", "+" )
users.setUserPresent( "������", "�������������" )
users.setUserPresent( "������", true )

users.showPresent()
��������� � ������� ������ ���� �����:

����
������
������

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
                    if(present === "+" || present === "�������������" || present === true) {
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
)( [ "����", "�������", "������", "������" ] )

users.showAbsent()