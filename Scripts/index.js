function setBooks(){
    event.preventDefault()
    let inputID=document.getElementById("id").value;
    let inputName = document.getElementById("name").value;
    let inputAge = document.getElementById("age").value;
    let designation = document.getElementById("designation").value;
    // let inputDate = document.getElementById("added").value;
    let priority=document.getElementById("priority").value;
    let vaccine = document.getElementById("vaccine").value;
    // let price = document.getElementById("price").value;
    let bookMark = "BookMark"
    let delet = "Delet"

    if(inputID && inputName && inputAge && designation && priority && vaccine){
        alert ("create successfully")
    
    let bookObj = {
        inputID,
        inputName,
        inputAge,
        designation,
        // inputDate,
        priority,
        vaccine,
        delet,
        bookMark,
        // price,
    }

    
    // let booksArr = []
    // booksArr.push(bookObj)
//    let storageArr = JSON.parse( localStorage.getItem("book-list") );
//     console.log(storageArr)
//    if(storageArr !== null){
//        booksArr.push(storageArr)
//    }
    
    localStorage.setItem("book-list", JSON.stringify([...JSON.parse(localStorage.getItem("book-list") || "[]"), bookObj]))
    }
    else{
        alert("fill all the details")
    }

}