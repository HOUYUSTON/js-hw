�������� ������� 'p', ��� ����� �� ������� ���������� �������� �������� 100px
��� ��������� ��������� ����� �� �������� �� ������ ������ ������ ������������� �� 200px
��� ����� �� �������� ��� ������ ��������

pep = document.body.appendChild(document.createElement ("p"))
pep.innerHTML = "pepega"
pep.style = `
    width : 100px;
    color : white;
    background-color : green;`
pep.onclick = function (event) {
    img = event.target.appendChild (document.createElement("img"))
    img.src = "https://ih1.redbubble.net/image.792313560.3852/poster,840x830,f8f8f8-pad,750x1000,f8f8f8.jpg"
    img.width = 100
    img.onmouseover = function (event) {
        event.target.style = `
            width : 200px;
            transition: width 0.5s
        `
    }
    img.onclick = function (event) {
        event.target.style = `
            visibility : hidden;
        `
    }
}