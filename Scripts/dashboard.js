function dashboard() {
    event.preventDefault();
  
    let tBody = document.getElementById("tBody");
    let infoDiv = document.getElementById('info')
   
    function myFunction(objData) {
      dashBoardBooks = dashBoardBooks.filter(
        (obj) => obj.inputName !== objData.inputName
      );
  
      booksCount.innerHTML = dashBoardBooks.length;
  
      let buySectionData = {
          inputID : objData.inputID,
          inputName : objData.inputName,
          inputAge : objData.inputAge,
          designation : objData.designation,
         
          priority :objData.priority,
          vaccine : objData.vaccine,
       
      }
  
      localStorage.setItem(
        "Deletes",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("Deletes") || "[]"),
          buySectionData,
        ])
      );
  
      localStorage.removeItem("book-list");
      localStorage.setItem("book-list", JSON.stringify(dashBoardBooks));
  
      console.log(buySectionData)
      cleanupCode();
      filteredData();
    }
  
 
  
  function myBookmark(objData) {
      dashBoardBooks = dashBoardBooks.filter(
        (obj) => obj.inputName !== objData.inputName
      );
  
      booksCount.innerHTML = dashBoardBooks.length;
  
      let bookMarkData = {
          
        inputID : objData.inputID,
        inputName : objData.inputName,
        inputAge : objData.inputAge,
        designation : objData.designation,
      
        priority :objData.priority,
        vaccine : objData.vaccine,
      
      }
  
      localStorage.setItem(
        "my-bookMarks",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("my-bookMarks") || "[]"),
          bookMarkData,
        ])
      );
  
      localStorage.removeItem("book-list");
      localStorage.setItem("book-list", JSON.stringify(dashBoardBooks));
  
      cleanupCode();
      filteredData();
    }
  
    let dashBoardBooks = JSON.parse(localStorage.getItem("book-list"));
   
    function filteredData() {
      for (const obj of dashBoardBooks) {
        const row = document.createElement("tr");
        for (const val of Object.values(obj)) {
          const col = document.createElement("td");
          col.textContent = val;
          col.style.width = "10%"
          col.style.textAlign = "center"
          col.style.border = "1px solid black"
          col.style.background = "blue"
          col.style.color = "white"
          col.style.padding = "10px"
          if (val == "Buy") {
          col.style.background = "red"
            col.addEventListener("click", () => myFunction(obj));
          }
          else if(val == "BookMark"){
              col.style.background = "orange"
              col.addEventListener("click", () => myBookmark(obj));
      
            }
          
  
          row.appendChild(col);
        }
  
        tBody.appendChild(row);
      }
    }
  
    function cleanupCode() {
      tBody.innerHTML = "";
    }
  
    console.log(dashBoardBooks)
    if(dashBoardBooks.length == 0){
      infoDiv.innerHTML = "No Books are added to the storage";
      infoDiv.style.color = "green" 
      infoDiv.style.fontSize = "30px"
    }
  
    else{
  
  
    for (const obj of dashBoardBooks) {
      const row = document.createElement("tr");
      for (const val of Object.values(obj)) {
        const col = document.createElement("td");
        col.textContent = val;
        col.style.width = "10%"
        col.style.textAlign = "center"
        col.style.border = "1px solid black"
        col.style.background = "blue"
        col.style.color = "white"
        col.style.padding = "10px"
        if (val == "Buy") {
          col.style.background = "red"
  
          col.addEventListener("click", () => myFunction(obj));
        }
  
        else if(val == "BookMark"){
          col.style.background = "#ffba01"
          col.addEventListener("click", () => myBookmark(obj));
  
        }
  
        row.appendChild(col);
      }
  
      tBody.appendChild(row);
    }
  }
  
  }
  