function buySectionData () {

    let tBody = document.getElementById("tBody");

    let Delete = JSON.parse( localStorage.getItem("Deletes"));

    if(Delete == null){
        infoDiv.innerHTML = "Nothing is added to bookmarks"
        infoDiv.style.color = "green" 
        infoDiv.style.fontSize = "30px"
        
    }
    else{

    for (const obj of Delete) {
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
      
    
          row.appendChild(col);
        }
    
        tBody.appendChild(row);
      }
    console.log(Delete)
}

}