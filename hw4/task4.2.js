function LibraryBook (title, year, author) {
    var title = title
    var year = year
    var author = author
    var readerName = ""
    var readerData = ""
    var giveTheBook = function (client) {
        if (typeof client === "string") {
            readerName = client
            readerData = new Date().toLocaleString()   
        }         
    }
    this.getBookInfo = function () {
        console.log(readerData)
    }
    this.getTheBook = function (client) {
        if (readerName === "") {
            giveTheBook (client)
            return title
        }
        return null            
    }
    this.returnBook = function () {
        readerName = ""
        readerData = ""
    }
}

book = new LibraryBook("Boomstick", 2000, "Ameliya")