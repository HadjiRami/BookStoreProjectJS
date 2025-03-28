let books = [];
let Id = 0;
document.getElementById("bookIdText").value = ++Id;

function showBook(){
    document.getElementById("bookIdText").style.display = "block";
    document.getElementById("bookNameText").style.display = "block";
    document.getElementById("bookAuthorText").style.display = "block";
    document.getElementById("bookPriceText").style.display = "block";
    document.getElementById("bookQuantityText").style.display = "block";
}


function hideBook(){
    document.getElementById("bookIdText").style.display = "none";
    document.getElementById("bookNameText").style.display = "none";
    document.getElementById("bookAuthorText").style.display = "none";
    document.getElementById("bookPriceText").style.display = "none";
    document.getElementById("bookQuantityText").style.display = "none";
}

function addBook(){
    books.push([Id, bookNameText.value, bookAuthorText.value, bookPriceText.value, bookQuantityText.value ]);
    alert("Book created: " + books[books.length-1]);
    document.getElementById("bookIdText").value = ++Id;
    document.getElementById("bookNameText").value = "Enter new Book";
    document.getElementById("bookAuthorText").value = "Enter new Author";
    document.getElementById("bookPriceText").value = "Enter new Price";
    document.getElementById("bookQuantityText").value = "Enter new Quantity";
}

function deleteBook(){
    books.pop();
    document.getElementById("bookIdText").value = --Id;
}

function queryId(){
    let qId = prompt("Enter book Id", "1");
    showBook();
    let i;
    for (i = 0; i < Id; i++) {
        if (books[i][0] == qId) {
            bookIdText.value = qId;
            bookNameText.value = books[i][1];
            bookAuthorText.value = books[i][2];
            bookPriceText.value = books[i][3];
            bookQuantityText.value = books[i][4];
        }
    }
}

function queryName(){
    let qName = prompt("Enter book Name", "Example Book");
    showBook();
    let i;
    for (i = 0; i < Id; i++) {
        if (books[i][1] == qName) {
            bookIdText.value = books[i][0];
            bookNameText.value = qName;
            bookAuthorText.value = books[i][2];
            bookPriceText.value = books[i][3];
            bookQuantityText.value = books[i][4];
        }
    }
}

function queryAuthor(){
    let qAuthor = prompt("Enter book Author", "Author Name");
    showBook();
    let i;
    let found = 0;
    for (i = 0; i < Id; i++) {
        if (books[i][2] == qAuthor) {
            bookIdText.value = books[i][0];
            bookNameText.value = books[i][1];
            bookAuthorText.value = qAuthor;
            bookPriceText.value = books[i][3];
            bookQuantityText.value = books[i][4];
            found = 1;
            break;
        }
    }
    if (found == 0) {
        alert("Author not found");
    }
}

function invoice(){
    let book = prompt("Enter book name: ", "");
    let quantity = prompt("Enter quantity: ", "1");
    let balance = prompt("Enter the balance: ", "");
    let i;
    for (i = 0; i < Id; i++) {
        if (books[i][1] == book) {
            let Price = Number(books[i][3]);
            let q = Number(books[i][4]);

            if (quantity > q) {
                alert("The required quantity is more than the available stock.");
            } else if (balance < Price * quantity) {
                alert("The balance is not enough.");
            } else {
                q -= quantity;
                books[i][4] = q;
                balance -= Price * quantity;
                alert("The new quantity is: " + q.toString());
                alert("The new balance is: " + balance.toString());
                alert("Invoice for " + quantity.toString() + " books.");
            }
            break;
        }
    }
}
