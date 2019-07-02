�������� ��������� ��������� ���� � ����� html-��������� � ������������� ������� click, mouseover, mouseout
var collection = []

function over ( event ) {
    ...
}
function out ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        ...
    }
)
���������� �������� ����� width � height �����, ����� ��������� �������� ���� ������ ��������, ��� ��������
���������� �������� #ff00ff50 �������� background-color ������� ��������
���������� �������� dotted 1px yellow; �������� border ������� ��������
��� ����������� ������� mouseover �������� �������� background-color ������ �������� �� #ffff0050
��� ����������� ������� mouseout �������� background-color ������ ��������������� �������� ��������
��� ����������� ������� click ������� ������ ���� ������
��� ��������� ����� �� ������� ������ ���������� ��������� � ��� ������ ( "first", "second", "third", "fourth" )



var collection = ["div", "section", "span", "p"]

function over ( event ) {
    event.target.style.backgroundColor = `#ffff0050`
    event.target.title = `${event.target.name}`
}
function out ( event ) {
    event.target.style.backgroundColor = `#ff00ff50`
}
function clickHandler ( event ) {
    event.target.remove()
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