var Book = function(title,author,genre,pageCount,publicID,isbn){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publicID = publicID;
    this.isbn = isbn;
}

var BookFactory = (function(){
    var existingBooks = {};
    var existingBook;
    return {
        createBook :function(title,author,genre,pageCount,publicID,isbn){
            existingBook = existingBooks[isbn]
            if(!!existingBook){
                return existingBook;
            }else{
                var book = new Book(title,author,genre,pageCount,publicID,isbn);
                existingBooks[isbn]=book;
                return book;
            }
        }
    };
});

var BookManager = (function(){
    var bookRecordDatabase = {};
    return {
        addBookRecord :function(title,author,genre,pageCount,publicID,isbn,checkoutDate,checkoutMemeber){
            var book = BookFactory.createBook(title,author,genre,pageCount,publicID,isbn);
            bookRecordDatabase[isbn]={
                checkoutMemeber : checkoutMemeber,
                checkoutDate : checkoutDate,
                book:book
            };
        },
        updateBookRecord:function(isbn,checkoutDate,checkoutMemeber){
            var bookRecord = bookRecordDatabase[isbn]
            bookRecord.checkoutMemeber=checkoutMemeber;
            bookRecord.checkoutDate = checkoutDate;

        }

        // 其他的外部操作更新 
    };
});