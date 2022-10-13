function setBooks(){
    event.preventDefault()
    let inputID=document.getElementById("id").value;
    let inputName = document.getElementById("name").value;
    let inputAge = document.getElementById("age").value;
    let designation = document.getElementById("designation").value;
   
    let priority=document.getElementById("priority").value;
    let vaccine = document.getElementById("vaccine").value;
   
    let bookMark = "BookMark"
    let delet = "Delet"

    if(inputID && inputName && inputAge && designation && priority && vaccine){
        alert ("create successfully")
    
    let bookObj = {
        inputID,
        inputName,
        inputAge,
        designation,
      
        priority,
        vaccine,
        delet,
        bookMark,
       
    }

    
    
    
    localStorage.setItem("book-list", JSON.stringify([...JSON.parse(localStorage.getItem("book-list") || "[]"), bookObj]))
    }
    else{
        alert("fill all the details")
    }

}