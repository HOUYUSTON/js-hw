����� ������� ���, ����� � ���� ����������, ��������� ������������� User, ��� �������������� ����� counter(), ������� ������� ��������� ������������� ����������
������ ����� ������������ ����������� ������� ����������� �� 1 � �������� ����� �������� �������� � �������� id ���������� ����������:
function User ( name ) {
    this.name = name
    this.id = this.counter()
}

...

var users = [
    new User ( "�����" ),
    new User ( "�����" ),
    new User ( "������" ),
    new User ( "�������" )
]
:warning: ����� ���������� ����:
users[1].id = users[1].counter()
�������� id ���������� �� ������ ����������, ��� ��, ��� � �������� ��������

~~~~~~~~~

function User ( name ) {
    this.name = name
    this.id = this.counter()
}

User.prototype.counter = function () {
    var last = 0
    return function () {
        return this.id>=0 ? null :last++
    }
} ()

var users = [
    new User ( "�����" ),
    new User ( "�����" ),
    new User ( "������" ),
    new User ( "�������" )
]