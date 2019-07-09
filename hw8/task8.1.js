Ќапилите код, вывод€щий на страницу текущее врем€ в течение 100 секунд
ѕодсказка: создайте элемент, в котором будет отображатьс€ текущее врем€
 онтент элемента должен обновл€тьс€ каждую секунду

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