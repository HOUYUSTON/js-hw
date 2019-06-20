function Bag () {
	var money = 0
	var cosmetics = []
	this.addMoney = function (num) {
	    num>0 ? money+=num : null
	}
	this.takeMoney = function (num) {
	    num>0 ? 
	       num < money ?
	           money -= num 
	           : null 
	       : null
	}
	this.balance = function () {
		return money
	}
	this.addCosmetics = function (c) {
		typeof c === "string" ?
			cosmetics.push(c) :
			null
	}
	this.takeCosmetics = function (c) {
		for(var item of cosmetics)
			item === c ?
				cosmetics.splice(cosmetics.indexOf(c), 1) :
				null
	}
	this.getCosmetics = function () {
		for(var item of cosmetics)
			console.log(item)
	}
}

var bag = new Bag()
bag.addCosmetics("lipstick")
bag.addCosmetics("brush")
bag.getCosmetics()
bag.takeCosmetics("lipstick")
bag.getCosmetics()