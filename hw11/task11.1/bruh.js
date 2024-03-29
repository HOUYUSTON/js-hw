var memes = []

const promise = new Promise(
	function(resolve, reject) {
		const request = new XMLHttpRequest
		request.open("GET","https://houyuston.github.io/js-hw/hw11/task11.1/data.json")
		request.onreadystatechange = function (event) {
			this.readyState === 4 ?
				this.status === 200 ?
					resolve(this.responseText) :
					reject(this.responseText) :
				null
		}
		request.send()
	}
).then (
	function (text) {
		memes = JSON.parse(text)
		memes.forEach(
		function (meme) {
			let div = document.body.appendChild(document.createElement("div"))
			let img = div.appendChild(document.createElement("img"))
			let p = div.appendChild(document.createElement("p"))
			img.src = meme.ref
			p.textContent = meme.title
	}
)
	}
)
.catch (
	function (text) {
		let p = document.body.appendChild(document.createElement("p"))
		p.textContent = text
	}
)