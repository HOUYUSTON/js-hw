�������� ���, ��������� �� �������� ������� ����� � ������� 100 ������
���������: �������� �������, � ������� ����� ������������ ������� �����
������� �������� ������ ����������� ������ �������

var label = document.body.appendChild(document.createElement ("label"))
var i = 0
while (i < 100) {
        setTimeout (
            function () {
                label.textContent = new Date().toLocaleString()
            },
            i*1000)
            i++
}